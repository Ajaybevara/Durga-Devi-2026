import {cookies} from 'next/headers';import {NextResponse} from 'next/server';import {validAdminCookie} from '@/backend/admin-session';
import {writeNeonSection} from '@/backend/neon';
export const runtime='nodejs';
export async function POST(request:Request){
 if(!await validAdminCookie((await cookies()).get('durga_admin')?.value))return NextResponse.json({error:'Unauthorized'},{status:401});
 const {section,payload}=await request.json();
 if(!['gallery','bhavani','accounts','nightPrograms'].includes(section)||!Array.isArray(payload))return NextResponse.json({error:'Invalid content.'},{status:400});
 try{
  const savedToNeon=await writeNeonSection(section,payload);
  if(!savedToNeon)return NextResponse.json({error:'Database is not configured. Set DATABASE_URL before saving admin changes.'},{status:503});
  return NextResponse.json({ok:true,database:'neon'});
 }catch(error){return NextResponse.json({error:error instanceof Error?error.message:'Unable to save content.'},{status:500})}
}
