import React from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Nav from "../components/dashboard/Nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" flex min-h-screen space-y-6 md:pt-16">
      <MaxWidthWrapper className=" static z-40 border-b bg-background ">
        <div className=" container flex h-16 items-center justify-between py-4">
          <Nav />
        </div>
        <main className=" flex w-full flex-1 flex-col">{children}</main>
      </MaxWidthWrapper>
    </div>
  );
}
