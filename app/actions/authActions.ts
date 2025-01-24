"use server";

import { signIn, signOut } from "next-auth/react";


export async function handleCredentialsSignin({ email, password }: {
   email: string,
   password: string
}) {
   try {
      await signIn("credentials", { email, password, redirectTo: "/dashboard" });
   } catch (error) {
      // if (error instanceof AuthError) {
      //    switch (error.type) {
      //       case 'CredentialsSignin':
      //          return {
      //             message: 'Invalid credentials',
      //          }
      //       default:
      //          return {
      //             message: 'Something went wrong.',
      //          }
      //    }
      // }
      console.log('error', error);
      throw error;
   }
}

export async function handleSignOut() {
   await signOut({ redirect: false });
}
