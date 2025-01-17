"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const MobileNav = ({
  navLinks,
}: {
  navLinks: { href: string; label: string }[];
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className=" md:hidden">
        <Button variant={"ghost"} size={"icon"}>
          <Menu className=" h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-[300px] sm:w-[400pc]">
        <SheetHeader>
          <SheetTitle>
            <Link href="/" className=" flex items-center ">
              <span className=" text-2xl font-bold text-primary"> Admin</span>
              <span className=" text-2xl font-bold text-muted-primary/90">
                track
              </span>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className=" flex flex-col gap-4 mt-8">
          {navLinks.map((link) => (
            <Link
              className={cn(
                "text-muted-foreground hover:text-primary",
                "transition-colors duration-300"
              )}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
          <LoginLink className={buttonVariants({ variant: "ghost" })}>
            Log In
          </LoginLink>
          <RegisterLink className={buttonVariants({ variant: "default" })}>
            Register
          </RegisterLink>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
