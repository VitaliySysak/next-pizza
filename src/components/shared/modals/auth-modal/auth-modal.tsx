"use client";

import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@/src/components/ui/dialog";
import { Button } from "@/src/components/ui";
import { signIn } from "next-auth/react";
import { cn } from "@/src/lib/utils";
import Image from "next/image";
import { LoginForm, RegisterForm } from "./forms";

interface Props {
  className?: string;
  open: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<Props> = ({ className, open, onClose }) => {
  const [type, setType] = React.useState<"login" | "register">("login");

  const onSwitchType = () => {
    setType(type === "login" ? "register" : "login");
  };

  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="rounded-xl sm:w-[450px] bg-white sm:p-10">
        <DialogTitle></DialogTitle>
        {type === "login" ? <LoginForm onClose={handleClose} /> : <RegisterForm onClose={handleClose} />}

        <hr />
        <div className="flex gap-2">
          <Button
            variant="secondary"
            onClick={() => signIn("github", { callbackUrl: "/", redirect: true })}
            className="gap-2 h-12 p-2 flex-1"
          >
            <Image width={24} height={24} src="/assets/images/git-hub.png" alt="github icon" />
            GitHub
          </Button>

          <Button
            variant="secondary"
            onClick={() => signIn("google", { callbackUrl: "/", redirect: true })}
            type="button"
            className="gap-2 h-12 p-2 flex-1"
          >
            <Image
              width={24}
              height={24}
              src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
              alt="google icon"
            />
            Google
          </Button>
        </div>

        <Button variant="outline" onClick={onSwitchType} type="button" className="h-12">
          {type !== "login" ? "Log In" : "Register"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};
