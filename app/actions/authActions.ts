"use server";

import { signIn, signOut } from "@/lib/auth";
import { AuthError } from "next-auth";

export async function handleCredentialsSignin({ email, password }: {
   email: string,
   password: string
}) {
   try {
      await signIn("credentials", { email, password, redirectTo: "/dashboard" });
   } catch (error) {
      if (error instanceof AuthError) {
         switch (error.type) {
            case 'CredentialsSignin':
               return {
                  message: 'Invalid credentials',
               }
            default:
               return {
                  message: 'Something went wrong.',
               }
         }
      }
      throw error;
   }
}

export async function handleSignOut() {
   await signOut({ redirect: true, redirectTo: "/login" });
}