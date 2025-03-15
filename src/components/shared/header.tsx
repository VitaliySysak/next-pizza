"use client";

import { cn } from "@/src/lib/utils";
import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { AuthModal, Container, ProfileButton, SearchInput } from "@/src/components/shared";
import { CartButton } from "@/src/components/shared";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({ className, hasSearch = true, hasCart = true }) => {
  const [openAuthModal, setOpenAuthModal] = React.useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  React.useEffect(() => {
    let toastMessage = "";

    if (searchParams.has("paid")) {
      toastMessage = "Order successfully paid!";
    }

    if (searchParams.has("verified")) {
      toastMessage = "Email confirmed successfully!";
    }

    if (toastMessage) {
      setTimeout(() => {
        router.replace("/");
        toast.success(toastMessage, { duration: 4000 });
      }, 1000);
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
          <AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)} />

          <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />
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
