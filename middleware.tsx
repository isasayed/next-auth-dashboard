// import { withAuth } from "next-auth/middleware";

// export default withAuth({
//   pages: {
//     signIn: "/login", // Redirect to this page if not authenticated
//   },
// });

// export const config = {
//   matcher: ["/dashboard/:path*"], // Protect all routes under /dashboard
// };

import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: any) {
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const { pathname } = req.nextUrl;

  // Redirect logged-in users away from the login page
  if (session && pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Protect dashboard route for unauthenticated users
  if (!session && pathname.includes("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*", // Protect all routes under /dashboard
    "/login", // Protect /login route
  ],
};
