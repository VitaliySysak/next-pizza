"use client";

import React from "react";
import { cn } from "@/src/lib/utils";
import { signIn, useSession } from "next-auth/react";
import { Button } from "../ui";
import { CircleUser, User } from "lucide-react";
import Link from "next/link";

interface Props {
  onClickSignIn?: () => void;
  className?: string;
}

export const ProfileButton: React.FC<Props> = ({ className, onClickSignIn }) => {
  const { data: session } = useSession();
  
  return (
    <div className={cn("", className)}>
      {!session ? (
        <Button
          loading={session === undefined}
          onClick={onClickSignIn}
          variant="outline"
          className="flex items-center gap-1 w-24"
        >
          <User size={16} />
          Enter
        </Button>
      ) : (
        <Link href="/profile">
          <Button variant="secondary" className="flex items-center gap-2">
            <CircleUser size={18} />
            Profile
          </Button>
        </Link>
      )}
    </div>
  );
};
