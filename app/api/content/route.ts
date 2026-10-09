import {NextResponse} from 'next/server';
import {readServerContent} from '@/backend/festival-content-store';
import {readNeonContent} from '@/backend/neon';
export const dynamic='force-dynamic';
export const runtime='nodejs';
export async function GET(){
 const fallback=await readServerContent();
 try{const stored=await readNeonContent();return NextResponse.json(stored?{...fallback,...stored}:fallback,{headers:{'Cache-Control':'no-store'}})}
 catch{return NextResponse.json(fallback,{headers:{'Cache-Control':'no-store'}})}
}
