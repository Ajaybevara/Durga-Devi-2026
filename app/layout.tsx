import type { Metadata } from 'next';
import { Inter, Tiro_Telugu } from 'next/font/google';
import './globals.css';
const inter=Inter({subsets:['latin'],variable:'--font-inter'});
const tiro=Tiro_Telugu({weight:'400',subsets:['telugu'],variable:'--font-tiro'});
const siteUrl=process.env.NEXT_PUBLIC_SITE_URL||'https://durga-devi.vercel.app';
export const metadata:Metadata={metadataBase:new URL(siteUrl),title:'Sri Durga Devi Sharannavaratri Mahotsavam | Koragam',description:'Official festival portal for Sri Sri Sri Durga Devi Sharannavaratri Mahotsavam, Koragam. Book seva, view events, darshan and donate.',openGraph:{title:'శ్రీ దుర్గాదేవి శరన్నవరాత్రి మహోత్సవములు',description:'Sharannavaratri celebrations, pujas, seva bookings and live darshan from Koragam.',url:siteUrl,siteName:'Koragam Durga Devi Mahotsavam',locale:'te_IN',type:'website',images:[{url:'/images/backgrounds/home.jpg',width:1200,height:630,alt:'Sri Durga Devi Mahotsavam Koragam'}]},twitter:{card:'summary_large_image',title:'Sri Durga Devi Mahotsavam, Koragam',description:'Pujas, seva bookings, gallery and live darshan.',images:['/images/backgrounds/home.jpg']},icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="te"><body className={`${inter.variable} ${tiro.variable}`}>{children}</body></html>}
