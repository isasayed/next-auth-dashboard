'use client';

import { ReactNode, useEffect } from 'react';

// next
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Loader } from '@/components/skeletons/loader';


// ==============================|| AUTH GUARD ||============================== //

type GuardProps = {
   children: ReactNode;
};

export default function AuthGuard({ children }: GuardProps) {
   const { data: session, status } = useSession();
   const router = useRouter();

   useEffect(() => {
      const fetchData = async () => {
         const res = await fetch('/api/auth/protected');
         const json = await res?.json();
         if (!json?.protected) {
            router.push('/login');
         }
      };
      fetchData();

      // eslint-disable-next-line
   }, [session]);

   if (status == 'loading' || !session?.user) return <Loader />;

   return <>{children} </>;
}