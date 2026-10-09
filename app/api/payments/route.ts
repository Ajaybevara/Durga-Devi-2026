import {NextResponse} from 'next/server';
import {createNeonPayment} from '@/backend/neon';
export const runtime='nodejs';

export async function POST(request:Request){
 const record=await request.json();
 if(!record.public_reference||!record.donor_name||!/^[0-9]{10}$/.test(record.mobile)||!Number.isFinite(Number(record.amount)))return NextResponse.json({error:'Invalid payment details.'},{status:400});
 try{
  const saved=await createNeonPayment({...record,amount:Number(record.amount),utr:record.utr||null});
  if(!saved)return NextResponse.json({error:'Payment database is not configured.'},{status:503});
  return NextResponse.json({ok:true,database:'neon'});
 }catch(error){return NextResponse.json({error:error instanceof Error?error.message:'Unable to save payment.'},{status:500})}
}
