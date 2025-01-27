// next
import { auth } from '@/lib/auth';
import { NextResponse } from 'next/server';

// ==============================|| NEXT AUTH - ROUTES  ||============================== //

export async function GET() {
   const session = await auth();
   if (session) {
      return NextResponse.json({ protected: true });
   } else {
      return NextResponse.json({ protected: false });
   }
}