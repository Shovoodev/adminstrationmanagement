import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import MobileNav from "./MobileNav";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { auth } from "@/lib/auth";

const Navbar = async () => {
  const user = await auth({ required: false, redirect: false });
  const navLinks = [
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/home",
      label: "Home",
    },
    {
      href: "/Projext",
      label: "Project",
    },
  ];
  return (
    <nav className=" fixed top-0 w-full z-50 border-b bg-background/50 backdrop:blur-xl">
      <MaxWidthWrapper>
        <div className=" flex h-16 items-center justify-between">
          <Link href="/" className=" flex items-center ">
            <span className=" text-2xl font-bold text-primary"> Admin</span>
            <span className=" text-2xl font-bold text-muted-primary/90">
              track
            </span>
          </Link>
          <div className=" hidden md:flex md:items-center md:space-x-8">
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
            {user && (
              <LogoutLink className={buttonVariants({ variant: "ghost" })}>
                Logout
              </LogoutLink>
            )}

            {!user && (
              <>
                <LoginLink
                  postLoginRedirectURL="/"
                  className={buttonVariants({ variant: "ghost" })}
                >
                  Log In
                </LoginLink>
                <RegisterLink
                  className={buttonVariants({ variant: "default" })}
                >
                  Register
                </RegisterLink>
              </>
            )}
          </div>
          <MobileNav navLinks={navLinks} />
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
