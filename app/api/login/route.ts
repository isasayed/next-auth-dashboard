import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
   const { email, password } = await request.json();

   try {
      if (email == 'demo@gmail.com' && password == 'demo123') {
         return NextResponse.json({
            id: 1,
            email: 'demo@gmail.com',
            name: 'John Doe',
            role: 'Admin',
            organization: 'Arc Inc',
            designation: 'CEO',
         }, { status: 200 });
      }

      return NextResponse.json({
         "message": "Invalid credentials"
      }, { status: 400 });
   } catch (error) {
      console.error('Error generating sitemap:', error instanceof Error ? error.message : 'Unknown error');
      return NextResponse.json({
         error: error instanceof Error ? error.message : 'An unknown error occurred'
      }, { status: 500 });
   }
}