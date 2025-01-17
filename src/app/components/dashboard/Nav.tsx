"use client";
import React from "react";
import { Backpack, History, LayoutDashboard, LibraryBig } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
const links = [
  {
    Name: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    Name: "history",
    href: "/dashboard",
    icon: History,
  },
  {
    Name: "teachers",
    href: "/dashboard",
    icon: LibraryBig,
  },
  {
    Name: "students",
    href: "/stuffmembers",
    icon: Backpack,
  },
];
const Nav = () => {
  const pathname = usePathname();
  return (
    <>
      <div className=" md:hidden fixed bottom-0 left-0 right-0 bg-background border-1">
        <nav className=" flex justify-center items-center gap-10">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.Name}
                href={link.href}
                className={cn(
                  " flex flex-col items-center gap-1 py-2 px-3 text-sm",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                <Icon className=" h-5 w-5" />
                <span className=" text-xs"> {link.Name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <nav className=" hidden md:flex gap-7">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname == link.href;
          return (
            <Link href={link.href} key={link.Name}>
              <div
                className={cn(
                  " flex items-center gap-2 py-2 rounded-md  transition-colors",
                  isActive && "bg-muted"
                )}
              >
                <Icon className=" h-5 w-5" />
                {link.Name}
              </div>
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Nav;
