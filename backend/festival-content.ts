export type GalleryItem={id:string;src:string;type:'Images'|'Videos';title:string;description:string;highlight:boolean};
export type BhavaniMember={id:string;name:string;details:string;photo:string};
export type AccountEntry={id:string;label:string;labelTe:string;amount:number};
export type NightProgram={id:string;day:string;date:string;title:string;titleTe:string;desc:string;descTe:string;image:string};
export type FestivalContent={gallery:GalleryItem[];bhavani:BhavaniMember[];accounts:AccountEntry[];nightPrograms:NightProgram[]};

export const defaultFestivalContent:FestivalContent={
 gallery:[
  {id:'gallery-1',src:'/images/gallery/img1.jpg',type:'Images',title:'Ammavari Alankaram',description:'Divine Ammavari alankaram',highlight:true},
  {id:'gallery-2',src:'/images/gallery/img2.jpg',type:'Images',title:'Sacred Puja',description:'Sacred festival puja',highlight:true},
  {id:'gallery-3',src:'/images/gallery/img3.jpg',type:'Images',title:'Festival Gathering',description:'Devotees at the festival',highlight:true},
  {id:'gallery-4',src:'/images/gallery/img4.jpg',type:'Images',title:'Divine Darshan',description:'Ammavari divine darshan',highlight:true},
  {id:'gallery-5',src:'/videos/gallery/p.mp4',type:'Videos',title:'Evening Harathi',description:'Evening harathi video',highlight:true},
  {id:'gallery-6',src:'/videos/gallery/bajana.mp4',type:'Videos',title:'Bhajana Seva',description:'Devotional bhajana seva',highlight:true}
 ],
 bhavani:['Chinni Rambabu','Majji Appala Naidu','Nethala Rohit','Pitta Rohit','Laveti Achuthrao','Ragolu Pradeep','Bodduru Ramarao','Bodduru Manikanta','Pisiniki Ramu','Majji Ramesh'].map((name,i)=>({id:`member-${i+1}`,name,details:'Devotional seva',photo:'/images/avatars/default-avatar.svg'})),
 accounts:[
  {id:'account-1',label:'2022',labelTe:'2022',amount:15000},{id:'account-2',label:'2023',labelTe:'2023',amount:13000},
  {id:'account-3',label:'2024',labelTe:'2024',amount:18100},{id:'account-4',label:'2025',labelTe:'2025',amount:15000},
  {id:'account-5',label:'2025 (Ganesh Pooja)',labelTe:'2025 (గణేష్ పూజ)',amount:4000}
 ],
 nightPrograms:[
  ['DAY 01','OCT 11','Traditional Dance','సాంప్రదాయ నృత్యం','Devotional group and solo performances beneath the festival lights.','ఉత్సవ దీపాల వెలుగులో భక్తి భావంతో బృంద మరియు వ్యక్తిగత నృత్య ప్రదర్శనలు.','/images/games/game-dance.jpg'],
  ['DAY 02','OCT 12','Chair Game','చైర్ గేమ్','A lively musical-chair challenge for all ages after the evening puja.','సాయంత్రం పూజ అనంతరం అన్ని వయసుల వారికి సంగీతంతో ఉత్సాహభరితమైన చైర్ పోటీ.','/images/games/game-chair.jpg'],
  ['DAY 03','OCT 13','Brick Game','బ్రిక్ గేమ్','A nighttime balance and teamwork challenge filled with cheers.','రాత్రి వేళ సందడి మధ్య సమతుల్యత మరియు జట్టు నైపుణ్యాన్ని పరీక్షించే ఆట.','/images/games/game-brick.jpg'],
  ['DAY 04','OCT 14','Muggula Pooti','ముగ్గుల పోటీ','Glowing rangoli creativity and festive colour in the evening celebrations.','సాయంత్రపు ఉత్సవ వాతావరణంలో సంప్రదాయ ముగ్గులు, సృజనాత్మకత మరియు రంగుల పోటీ.','/images/games/game-rangoli.webp'],
  ['DAY 05','OCT 15','Tug of War','తాడు లాగుడు','Village teams compete under bright festival floodlights.','ప్రకాశవంతమైన ఉత్సవ దీపాల కింద గ్రామ జట్లు తాడు లాగుడు పోటీలో తలపడతాయి.','/images/games/tug-of-war-real.jpg'],
  ['DAY 06','OCT 16','Food Challenge','ఫుడ్ ఛాలెంజ్','A cheerful night food challenge with enthusiastic community participation.','రాత్రి వేడుకల్లో సమాజమంతా ఉత్సాహంగా పాల్గొనే ఆనందకరమైన ఆహార పోటీ.','/images/games/game-food.jpg'],
  ['DAY 07','OCT 17','Kabaddi','కబడ్డీ','High-energy village kabaddi under the festival lights.','ఉత్సవ దీపాల కింద ఉత్సాహభరితమైన గ్రామ కబడ్డీ.','/images/games/game-kabaddi.jpg'],
  ['DAY 08','OCT 18','Volleyball','వాలీబాల్','A friendly night volleyball match under the festival lights.','ఉత్సవ దీపాల వెలుగులో స్నేహపూర్వక రాత్రి వాలీబాల్ పోటీ.','/images/games/game-volleyball.jpg'],
  ['DAY 09','OCT 19','Fun Activities','సరదా కార్యక్రమాలు','A festive night of games, laughter and activities for the whole family.','కుటుంబం మొత్తం కలిసి ఆనందించే రాత్రి ఆటలు, నవ్వులు మరియు సరదా కార్యక్రమాలు.','/images/games/game-fun.jpg']
 ].map((x,i)=>({id:`night-${i+1}`,day:x[0],date:x[1],title:x[2],titleTe:x[3],desc:x[4],descTe:x[5],image:x[6]}))
};

export function getLocalFestivalContent():FestivalContent{
 return defaultFestivalContent;
}
export async function loadFestivalContent():Promise<FestivalContent>{
 const local=getLocalFestivalContent();
 try{const response=await fetch('/api/content',{cache:'no-store'});if(response.ok)return await response.json()}catch{}
 return local;
}
export async function saveFestivalSection<K extends keyof FestivalContent>(section:K,payload:FestivalContent[K]){
 const response=await fetch('/api/admin/content',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({section,payload})});
 const result=await response.json();
 if(!response.ok)throw new Error(result.error||'Unable to publish content.');
 return result;
}
export async function uploadFestivalMedia(file:File,folder:string){
 const body=new FormData();body.append('file',file);body.append('folder',folder);
 const response=await fetch('/api/admin/upload',{method:'POST',body}),result=await response.json();
 if(!response.ok)throw new Error(result.error||'Upload failed.');return result.url as string;
}
