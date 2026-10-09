import {NextResponse} from 'next/server';
import {adminToken} from '@/backend/admin-session';
export async function POST(request:Request){
 const {username,password}=await request.json();
 const enteredUsername=String(username??'').trim().toLowerCase(),enteredPassword=String(password??'').trim();
 if(!process.env.ADMIN_USERNAME||!process.env.ADMIN_PASSWORD||!process.env.ADMIN_SESSION_SECRET)return NextResponse.json({error:'Admin authentication is not configured.'},{status:503});
 const valid=enteredUsername===process.env.ADMIN_USERNAME.trim().toLowerCase()&&enteredPassword===process.env.ADMIN_PASSWORD.trim();
 if(!valid)return NextResponse.json({error:'Invalid username or password.'},{status:401});
 const response=NextResponse.json({ok:true});
 const forwardedProtocol=request.headers.get('x-forwarded-proto')?.split(',')[0]?.trim();
 const secure=(forwardedProtocol||new URL(request.url).protocol.replace(':',''))==='https';
 response.cookies.set('durga_admin',await adminToken(),{httpOnly:true,sameSite:'strict',secure,path:'/',maxAge:60*60*8});
 return response;
}
export async function DELETE(){const response=NextResponse.json({ok:true});response.cookies.set('durga_admin','',{httpOnly:true,path:'/',maxAge:0});return response}
