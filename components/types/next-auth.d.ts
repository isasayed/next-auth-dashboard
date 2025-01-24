// types/next-auth.d.ts

import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
   interface User {
      role: string;
      designation: string,
      organization: string,
   }
   interface Session {
      user: User
   }
}

declare module "next-auth/jwt" {
   interface JWT {
      role: string;
      designation: string,
      organization: string,
   }
}