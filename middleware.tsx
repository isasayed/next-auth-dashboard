export { auth as middleware } from "@/lib/auth";

export const config = {
  matcher: [
    "/dashboard/:path*", // Protect all routes under /dashboard
    "/login", // Protect /login route
  ],
};