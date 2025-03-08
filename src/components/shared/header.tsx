"use client";

import { cn } from "@/src/lib/utils";
import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";
import { Container, SearchInput } from "@/src/components/shared";
import { Button } from "@/src/components/ui";
import { CartButton } from "@/src/components/shared";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({ className, hasSearch = true, hasCart = true }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  React.useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("paid");
    router.replace(`?${params.toString()}`);
    
    if (searchParams.has("paid")) {
      setTimeout(() => {
        toast.success("Order successfully paid!");
      }, 500);
    }
  }, []);

  return (
    <header className={cn("border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/*Left side */}
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src={logo} width={35} height={35} alt="Logo" />
            <div>
              <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">can&apos;t be tastier</p>
            </div>
          </div>
        </Link>
        {hasSearch && (
          <div className="mx-10 flex-1">
            <React.Suspense>
              <SearchInput />
            </React.Suspense>
          </div>
        )}

        {/*Right side */}
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} />
            Enter
          </Button>
          {hasCart && (
            <div>
              <CartButton />
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};
