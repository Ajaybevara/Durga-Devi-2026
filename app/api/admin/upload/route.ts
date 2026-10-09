import {put} from '@vercel/blob';
import {cookies} from 'next/headers';
import {NextResponse} from 'next/server';
import {validAdminCookie} from '@/backend/admin-session';
import {promises as fs} from 'fs';
import path from 'path';

export const runtime='nodejs';

const MAX_FILE_SIZE=50*1024*1024;
const allowedFolders=new Set(['gallery','bhavani-profiles','night-programs']);

function sanitizeFilename(name:string){
 const safe=path.basename(name).toLowerCase().replace(/[^a-z0-9._-]+/g,'-').replace(/^-+|-+$/g,'');
 return safe||'upload';
}

export async function POST(request:Request){
 if(!await validAdminCookie((await cookies()).get('durga_admin')?.value))return NextResponse.json({error:'Unauthorized'},{status:401});
 let form:FormData;
 try{form=await request.formData()}catch{return NextResponse.json({error:'Invalid upload form.'},{status:400})}
 const file=form.get('file'),folder=String(form.get('folder')||'gallery').toLowerCase().replace(/[^a-z0-9-]/g,'');
 if(!(file instanceof File))return NextResponse.json({error:'Choose an image or video.'},{status:400});
 if(!allowedFolders.has(folder))return NextResponse.json({error:'Invalid upload folder.'},{status:400});
 if(file.size===0)return NextResponse.json({error:'The selected file is empty.'},{status:400});
 if(file.size>MAX_FILE_SIZE)return NextResponse.json({error:'Maximum upload size is 50 MB.'},{status:413});
 if(!file.type.startsWith('image/')&&!file.type.startsWith('video/'))return NextResponse.json({error:'Only images and videos are allowed.'},{status:400});
 const filename=sanitizeFilename(file.name);
 try{
  if(process.env.BLOB_READ_WRITE_TOKEN){
   const blob=await put(`${folder}/${filename}`,file,{access:'public',addRandomSuffix:true,token:process.env.BLOB_READ_WRITE_TOKEN});
   return NextResponse.json({url:blob.url,storage:'vercel-blob'});
  }
  if(process.env.NODE_ENV==='production')return NextResponse.json({error:'Vercel Blob is not configured. Set BLOB_READ_WRITE_TOKEN.'},{status:503});
  const localName=`${Date.now()}-${filename}`,directory=path.join(process.cwd(),'public','admin-uploads',folder);
  await fs.mkdir(directory,{recursive:true});
  await fs.writeFile(path.join(directory,localName),Buffer.from(await file.arrayBuffer()));
  return NextResponse.json({url:`/admin-uploads/${folder}/${localName}`,storage:'local-file'});
 }catch(error){
  return NextResponse.json({error:error instanceof Error?`Upload failed: ${error.message}`:'Upload failed.'},{status:500});
 }
}
