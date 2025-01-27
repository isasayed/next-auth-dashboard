import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbPage,
   BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Skeleton } from '@/components/ui/skeleton';

export function Loader() {
   return (
      <div className="flex flex-1 flex-col gap-4 p-4">
         <Breadcrumb>
            <BreadcrumbList>
               <BreadcrumbItem>
                  <BreadcrumbPage>
                     <Skeleton className="h-4 w-20" />
                  </BreadcrumbPage>
               </BreadcrumbItem>
               <BreadcrumbSeparator />
               <BreadcrumbItem>
                  <BreadcrumbPage>
                     <Skeleton className="h-4 w-16" />
                  </BreadcrumbPage>
               </BreadcrumbItem>
            </BreadcrumbList>
         </Breadcrumb>
         <Skeleton className="h-8 w-32" />
      </div>
   )
}