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
import { getPaidInfo } from "@/src/services/paid-validation";
import { OrderStatus } from "@prisma/client";
import Hamburger from "hamburger-react";
import { Drawer } from "antd";

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
    const pollPaymentStatus = async (orderId: number, attemptsLeft = 5) => {
      try {
        const paid = await getPaidInfo(orderId);

        if (paid.status === OrderStatus.SUCCEEDED) {
          toast.success("Order successfully paid!", { duration: 4000 });
          router.replace("/");
        } else if (paid.status === OrderStatus.CANCELLED) {
          toast.error("Order payment has failed!", { duration: 4000 });
          router.replace("/");
        } else {
          if (attemptsLeft > 0) {
            setTimeout(() => pollPaymentStatus(orderId, attemptsLeft - 1), 2000);
          } else {
            toast.loading("Order is still pending, please wait or check later.", { duration: 4000 });
            router.replace("/");
          }
        }
      } catch (err) {
        toast.error("Failed to verify order status.", { duration: 4000 });
        console.error(err);
        router.replace("/");
      }
    };

    const checkPaymentStatus = () => {
      if (searchParams.has("paid")) {
        const orderId = Number(searchParams.get("paid"));
        pollPaymentStatus(orderId);
      }

      if (searchParams.has("verified")) {
        setTimeout(() => {
          toast.success("Email confirmed successfully!", { duration: 4000 });
          router.replace("/");
        }, 1000);
      }
    };

    checkPaymentStatus();
  }, []);

  return (
    <header className={cn("border-b", className)}>
      {/* Mobile */}
      <Container className="sm:hidden flex flex-col gap-4 items-center justify-between py-2">
        {/*Left side */}
        <div className="flex w-full justify-between px-4">
          <button onClick={() => setOpenDrawer((prev) => !prev)}>
            <Hamburger size={30} color="#ff5e00" toggled={false} toggle={() => {}} />
          </button>
          <Drawer
            className="p-0 h-12"
            placement={"top"}
            height={82}
            closable={false}
            onClose={() => setOpenDrawer((prev) => !prev)}
            open={openDrawer}
            key={"top"}>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)} />

                <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />
                {hasCart && (
                  <Link href={"/checkout"}>
                    <div className="pointer-events-none">
                      <CartButton />
                    </div>
                  </Link>
                )}
              </div>
              <hr />
            </div>
          </Drawer>
          <Link href="/">
            <div className="flex items-center gap-2 mx-2">
              <Image src={logo} width={24} height={24} alt="Logo" />
              <div>
                <h1 className="text-lg uppercase font-black">Next Pizza</h1>
                <p className="text-sm text-gray-400 leading-3">can&apos;t be tastier</p>
              </div>
            </div>
          </Link>
        </div>
      </Container>

      {/* Desktop */}
      <Container className="hidden sm:flex items-center justify-between py-8">
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
