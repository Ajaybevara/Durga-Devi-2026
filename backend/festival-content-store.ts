import {promises as fs} from 'fs';
import path from 'path';
import {FestivalContent,defaultFestivalContent} from '@/backend/festival-content';
const dataFile=path.join(process.cwd(),'backend','data','festival-content.json');
export async function readServerContent():Promise<FestivalContent>{
 try{return {...defaultFestivalContent,...JSON.parse(await fs.readFile(dataFile,'utf8'))}}catch{return defaultFestivalContent}
}
