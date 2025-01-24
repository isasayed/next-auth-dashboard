import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { getSession } from "@/lib/auth";
import { ModeToggle } from "@/components/theme-toggle";

export default async function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   const session = await getSession();

   return (
      <html lang="en">
         <body >
            {/* {session && session.user && */}
            <SidebarProvider>
               <AppSidebar />
               <SidebarInset>
                  <header className="sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
                     <div className="flex items-center justify-between w-full">
                        <SidebarTrigger className="-ml-1" />
                        {/* <Separator orientation="vertical" className="mr-2 h-4" /> */}
                        <div className="flex items-center gap-2 text-sm">
                           <ModeToggle />
                        </div>
                     </div>
                  </header>
                  {children}
               </SidebarInset>
            </SidebarProvider>
            {/* } */}
         </body>
      </html>
   );
}
