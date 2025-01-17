/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { SessionWithLanguage } from "@/types/dashboard";
import { ActivityType } from "@prisma/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

ChartJS.register(Tooltip, Legend, ArcElement);

const dummyData: SessionWithLanguage[] = [
  {
    id: "1",
    date: new Date(),
    duration: 100,
    type: "TEACHERS",
    difficulty: "EASY",
    language: {
      id: "1",
      name: "English",
    },
    description: "this is a try only",
  },
  {
    id: "2",
    date: new Date(),
    duration: 30,
    type: "STUDENTS",
    difficulty: "EASY",
    language: {
      id: "1",
      name: "English",
    },
    description: "this is a try only",
  },
  {
    id: "3",
    date: new Date(),
    duration: 50,
    type: "OTHER_STUFF",
    difficulty: "EASY",
    language: {
      id: "1",
      name: "English",
    },
    description: "this is a try only",
  },
];

const COLORS: Record<ActivityType, string> = {
  TEACHERS: "#34a853",
  STUDENTS: "#4285f4",
  OTHER_STUFF: "#f97316",
};

const ActivityChart = () => {
  const distribution = dummyData.reduce((acc, session) => {
    const minutes = session.duration;
    acc[session.type] = (acc[session.type] || 0) + minutes;
    return acc;
  }, {} as Record<ActivityType, number>);

  const data = Object.entries(distribution)
    .map(([type, minutes]) => ({
      name: type.charAt(0) + type.slice(1).toLowerCase(),
      value: minutes,
      color: COLORS[type as ActivityType],
    }))
    .filter((item) => item.value > 0);

  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: data.map((item) => item.color),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            const value = tooltipItem.raw;
            return `${value}`;
          },
        },
      },
      legend: {
        position: "bottom" as const,
      },
    },
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-center scale-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Activity Distribution
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[290px]">
          <Doughnut data={chartData} options={options} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityChart;
