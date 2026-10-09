import {promises as fs} from 'fs';
import path from 'path';
import {NextResponse} from 'next/server';

export const dynamic='force-dynamic';

const mimeTypes:Record<string,string>={
 '.avif':'image/avif',
 '.gif':'image/gif',
 '.jpeg':'image/jpeg',
 '.jpg':'image/jpeg',
 '.mp4':'video/mp4',
 '.png':'image/png',
 '.svg':'image/svg+xml',
 '.webm':'video/webm',
 '.webp':'image/webp'
};

export async function GET(_request:Request,{params}:{params:Promise<{path:string[]}>}){
 const {path:requestedPath}=await params;
 const uploadRoot=path.resolve(process.cwd(),'public','admin-uploads');
 const requested=path.resolve(uploadRoot,...requestedPath);
 if(requested!==uploadRoot&&!requested.startsWith(`${uploadRoot}${path.sep}`))return NextResponse.json({error:'Invalid media path.'},{status:400});
 try{
  const body=await fs.readFile(requested);
  return new NextResponse(body,{headers:{'Content-Type':mimeTypes[path.extname(requested).toLowerCase()]||'application/octet-stream','Cache-Control':'public, max-age=3600'}});
 }catch{return NextResponse.json({error:'Media not found.'},{status:404})}
}
