import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import axios from "@/lib/axios";

export const { handlers, signIn, signOut, auth } = NextAuth({
   providers: [
      Credentials({
         name: "Credentials",
         credentials: {
            email: { label: "Email", type: "email" },
            password: { label: "Password", type: "password" },
         },
         async authorize(credentials) {
            const body = {
               email: credentials?.email,
               password: credentials?.password,
            }
            try {
               const response = await axios.post("/api/login", body);
               if (response.status == 200) {
                  const user = await response.data;
                  return user;
               }
            } catch (error) { }
            return null;
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