import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
   providers: [
      Credentials({
         name: "Credentials",
         credentials: {
            email: { label: "Email", type: "email" },
            password: { label: "Password", type: "password" },
         },
         async authorize(credentials) {
            const response = await fetch("http://localhost:3000/api/login", {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({
                  email: credentials?.email,
                  password: credentials?.password,
               }),
            });

            if (!response.ok)
               return null;

            const user = await response.json();
            return user;
         }
      })
   ],
   callbacks: {
      authorized({ request: { nextUrl }, auth }) {
         const isLoggedIn = !!auth?.user;
         const { pathname } = nextUrl;
         if (isLoggedIn) {
            if (pathname.startsWith('/login')) {
               return Response.redirect(new URL('/dashboard', nextUrl));
            }
         } else {
            if (!pathname.startsWith('/login')) {
               return Response.redirect(new URL('/login', nextUrl));
            }
         }
         return !!auth;
      },
      async session({ session, token }) {
         // Add custom fields to the session object
         session.user.name = token.name;
         session.user.role = token.role;
         session.user.designation = token.designation; // Add designation
         session.user.organization = token.organization; // Add organization
         return session;
      },
      async jwt({ token, user }) {
         // Add custom fields to the JWT token
         if (user) {
            token.name = user.name;
            token.role = user.role;
            token.designation = user.designation; // Add designation
            token.organization = user.organization; // Add organization
         }
         return token;
      },
   },
   secret: process.env.NEXTAUTH_SECRET,
   pages: {
      signIn: "/login"
   }
});