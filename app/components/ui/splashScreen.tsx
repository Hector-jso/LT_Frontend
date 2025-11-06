"use client";

import { useEffect } from "react";
import { useAuth } from "@/app/Context/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import Loading from "@/app/assets/svg/loading/Loading in.svg";
import LoadingIn from "@/app/assets/svg/loading/Loading out.svg";

const PUBLIC_PATHS = ["/", "/login", "/register"];

export function SplashScreen({ children }: { children: React.ReactNode }) {
  const { loading, isAuthenticated } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const isPublic = PUBLIC_PATHS.includes(pathname);

  useEffect(() => {
    if (!loading && !isAuthenticated && !isPublic) {
      router.push("/");
    }
  }, [loading, isAuthenticated, isPublic, router]);

  if (isPublic) {
    return <>{children}</>;
  }

  if (loading) {
    return (
      <div className={`flex justify-center items-center h-screen w-screen `}>
        <div className="relative w-1/4 aspect-square">
          <Loading className="absolute inset-0 w-full h-full text-b" />
          <LoadingIn className="absolute inset-0 w-full h-full animate-spin-loading text-b" />
        </div>
      </div>
    );
  }
  if (isAuthenticated){
    return <>{children}</>;
  }

  return <> ERROR </>
}
