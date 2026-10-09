import {cookies} from 'next/headers';import {NextResponse} from 'next/server';import {validAdminCookie} from '@/backend/admin-session';
import {writeServerSection} from '@/backend/festival-content-store';
import {writeNeonSection} from '@/backend/neon';
export async function POST(request:Request){
 if(!await validAdminCookie(cookies().get('durga_admin')?.value))return NextResponse.json({error:'Unauthorized'},{status:401});
 const {section,payload}=await request.json();
 if(!['gallery','bhavani','accounts','nightPrograms'].includes(section)||!Array.isArray(payload))return NextResponse.json({error:'Invalid content.'},{status:400});
 try{
  const savedToNeon=await writeNeonSection(section,payload);
  if(!savedToNeon)await writeServerSection(section,payload);
  return NextResponse.json({ok:true,database:savedToNeon?'neon':'local-file'});
 }catch(error){return NextResponse.json({error:error instanceof Error?error.message:'Unable to save content.'},{status:500})}
}
