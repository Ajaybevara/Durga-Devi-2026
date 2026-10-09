const encoder=new TextEncoder();
const hex=(bytes:ArrayBuffer)=>Array.from(new Uint8Array(bytes)).map(x=>x.toString(16).padStart(2,'0')).join('');
export async function adminToken(){
 const secret=process.env.ADMIN_SESSION_SECRET||'durga-devi-2026-change-this-secret';
 return hex(await crypto.subtle.digest('SHA-256',encoder.encode(`durga-admin:${secret}`)));
}
export async function validAdminCookie(value?:string){return Boolean(value&&value===await adminToken())}
