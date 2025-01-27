import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { auth } from "@/lib/auth"

export default async function Page() {
  const session = await auth();

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
      <div className="grid auto-rows-min gap-4 md:grid-cols-5">
        {session && session.user && <>{session.user.name}</>}
      </div>
    </div>
  )
}