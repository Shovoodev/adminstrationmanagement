import React, { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft, Loader } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";

const AddTeacherpage = () => {
  return (
    <MaxWidthWrapper>
      <div className=" flex flex-col lg:flex-row gap-8 items-start ">
        <div className=" w-full lg:w-1/3 lg:sticky lg: top-24 space-y-8">
          <div className=" space-y-6">
            <Link
              href={"/dashboard"}
              className={buttonVariants({ variant: "ghost" })}
            >
              <ArrowLeft className=" h-4 w-4" />
              Back
            </Link>
            <div>
              <h1 className=" font-bold text-2xl mb-3">
                Add new Teacher on administration
              </h1>
              {
                // to do add new teacher if the teacher has already exist
              }
            </div>
          </div>
        </div>
        <div className=" w-full lg:w-2/3">
          <div className=" absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur">
            <div className=" relative">
              <Suspense
                fallback={
                  <div className=" flex items-center justify-center min-h-[400px]">
                    <Loader className=" h-10 w-10 animate-spin text-muted-foreground" />
                  </div>
                }
              ></Suspense>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default AddTeacherpage;
