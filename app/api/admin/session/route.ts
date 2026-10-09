import {cookies} from 'next/headers';import {NextResponse} from 'next/server';import {validAdminCookie} from '@/backend/admin-session';
export async function GET(){return NextResponse.json({authenticated:await validAdminCookie(cookies().get('durga_admin')?.value)})}
