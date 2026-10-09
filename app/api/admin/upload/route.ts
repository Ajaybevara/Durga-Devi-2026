import {cookies} from 'next/headers';import {NextResponse} from 'next/server';import {validAdminCookie} from '@/backend/admin-session';
import {promises as fs} from 'fs';import path from 'path';
export async function POST(request:Request){
 if(!await validAdminCookie(cookies().get('durga_admin')?.value))return NextResponse.json({error:'Unauthorized'},{status:401});
 const form=await request.formData(),file=form.get('file'),folder=String(form.get('folder')||'gallery');
 if(!(file instanceof File))return NextResponse.json({error:'Choose an image or video.'},{status:400});
 if(file.size>50*1024*1024)return NextResponse.json({error:'Maximum upload size is 50 MB.'},{status:400});
 if(!file.type.startsWith('image/')&&!file.type.startsWith('video/'))return NextResponse.json({error:'Only images and videos are allowed.'},{status:400});
 const safe=file.name.toLowerCase().replace(/[^a-z0-9._-]+/g,'-'),fileName=`${Date.now()}-${safe}`;
 const safeFolder=folder.toLowerCase().replace(/[^a-z0-9_-]+/g,'-');
 const directory=path.join(process.cwd(),'public','admin-uploads',safeFolder);await fs.mkdir(directory,{recursive:true});
 await fs.writeFile(path.join(directory,fileName),Buffer.from(await file.arrayBuffer()));
 return NextResponse.json({url:`/admin-uploads/${safeFolder}/${fileName}`,fileBacked:true});
}
