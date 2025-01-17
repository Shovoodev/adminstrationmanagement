"use client";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Plus, Target } from "lucide-react";
import Link from "next/link";
import React from "react";
import ActivityChart from "./Activity_chart";
import TeacherTable from "./TeacherTable";

const DashboardContent = () => {
  return (
    <div className=" flex flex-col gap-8 ">
      <div>
        <h1 className=" font-bold text-4xl mb-3">Dashboard</h1>
        <p className=" text-muted-foreground">
          {/* to do the job */}
          welcome back User
        </p>
      </div>
      <div className=" flex gap-4 ">
        <Link
          href={`/dashboard/teacher`}
          className={buttonVariants({ variant: "outline" })}
        >
          <Plus className=" h-4 w.4" />
          Add Teacher
        </Link>

        <Link
          href={"/dashboard"}
          className={buttonVariants({ variant: "outline" })}
        >
          <Plus className=" h-4 w.4" /> Add Student
        </Link>
        <Link
          href={"/dashboard"}
          className={buttonVariants({ variant: "outline" })}
        >
          <Plus className=" h-4 w.4" /> Add Stuff member
        </Link>
      </div>

      <div className=" grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className=" grid gap md:col-span-2">
          <div className=" grid gap-4  md:grid-cols-3">
            <Card>
              <CardHeader className=" flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className=" text-sm font-medium">
                  Total Students
                </CardTitle>
                <Clock className=" h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className=" text-2xl font-bold">60 </div>
                <p className=" text-xs text-muted-foreground"> newly added </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className=" flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className=" text-sm font-medium">
                  Total Students
                </CardTitle>
                <Target className=" h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className=" text-2xl font-bold">60 hours</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className=" flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className=" text-sm font-medium">
                  Total Adminstrative Stuff
                </CardTitle>
                <Target className=" h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className=" text-2xl font-bold">60 hours</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className=" flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className=" text-sm font-medium">
                  All other Stuffs
                </CardTitle>
                <Target className=" h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className=" text-2xl font-bold">60 hours</div>
              </CardContent>
            </Card>
          </div>
        </div>
        <ActivityChart />
      </div>
      <TeacherTable />
    </div>
  );
};

export default DashboardContent;
