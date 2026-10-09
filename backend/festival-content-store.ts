import {promises as fs} from 'fs';
import path from 'path';
import {FestivalContent,defaultFestivalContent} from '@/backend/festival-content';
const dataFile=path.join(process.cwd(),'backend','data','festival-content.json');
export async function readServerContent():Promise<FestivalContent>{
 try{return {...defaultFestivalContent,...JSON.parse(await fs.readFile(dataFile,'utf8'))}}catch{return defaultFestivalContent}
}
export async function writeServerSection<K extends keyof FestivalContent>(section:K,payload:FestivalContent[K]){
 const current=await readServerContent(),next={...current,[section]:payload};
 await fs.mkdir(path.dirname(dataFile),{recursive:true});
 await fs.writeFile(dataFile,JSON.stringify(next,null,2),'utf8');
 return next;
}
