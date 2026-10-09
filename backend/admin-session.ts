const encoder=new TextEncoder();
const hex=(bytes:ArrayBuffer)=>Array.from(new Uint8Array(bytes)).map(x=>x.toString(16).padStart(2,'0')).join('');
export async function adminToken(){
 const secret=process.env.ADMIN_SESSION_SECRET;
 if(!secret)throw new Error('ADMIN_SESSION_SECRET is not configured.');
 return hex(await crypto.subtle.digest('SHA-256',encoder.encode(`durga-admin:${secret}`)));
}
export async function validAdminCookie(value?:string){
 if(!value||!process.env.ADMIN_SESSION_SECRET)return false;
 return value===await adminToken();
}
