"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LogOutIcon } from "lucide-react";
import { ROUTES } from "@/data/nav-routes";
function Login({ className }: { className?: string }) {
  const { user, signOut } = useAuth();

  return (
    <div className={cn("h-10 flex items-center", className)}>
      {user ? (
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-sm text-foreground/70 hidden md:inline-block">{user.email}</span>
          <Button
            variant="outline"
            size="sm"
            className="border-primary/30 text-primary hover:bg-primary/10 hover:text-primary"
            onClick={() => signOut()}>
            <LogOutIcon className="w-4 h-4 mr-2" />
            Logg ut
          </Button>
        </div>
      ) : (
        <div className="">
          <Link href={ROUTES.LOGIN}>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Logg inn
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Login;
