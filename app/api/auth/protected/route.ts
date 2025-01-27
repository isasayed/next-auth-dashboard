// next
import { getSession } from '@/lib/auth';
import { NextResponse } from 'next/server';

// ==============================|| NEXT AUTH - ROUTES  ||============================== //

export async function GET() {
   const session = await getSession();
   if (session) {
      return NextResponse.json({ protected: true });
   } else {
      return NextResponse.json({ protected: false });
   }
}