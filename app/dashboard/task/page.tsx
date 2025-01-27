'use client';

import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbSeparator,
   BreadcrumbList,
   BreadcrumbPage,
} from "@/components/ui/breadcrumb"

import { useSession } from "next-auth/react"

import AuthGuard from "@/lib/route-guard/AuthGuard";

export default function Page() {
   const { data: session } = useSession();

   return (
      <AuthGuard>
         <div className="flex flex-1 flex-col gap-4 p-4">
            <Breadcrumb>
               <BreadcrumbList>
                  <BreadcrumbItem>
                     <BreadcrumbLink href="/dashboard">
                        Dashboard
                     </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                     <BreadcrumbPage>Tasks</BreadcrumbPage>
                  </BreadcrumbItem>
               </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-lg font-semibold md:text-2xl">Tasks</h1>
            <div className="grid auto-rows-min gap-4 md:grid-cols-5">
               {session && session.user && <>{session.user.name}</>}
            </div>
         </div>
      </AuthGuard>
   )
}
