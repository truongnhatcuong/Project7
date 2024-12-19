"use client";
import Image from "next/image";
import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
const data = [
  { name: "Group A", value: 92, fill: "#C3EBFA" },
  { name: "Group B", value: 8, fill: "#FAE27C" },
];

const PerformanceChart = () => {
  return (
    <div className="bg-white p-4 rounded-md h-80 relative">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Performance</h1>
        <Image src={"/moreDark.png"} alt="" width={14} height={14} />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="font-semibold text-3xl">9.2</h1>
        <p className="text-sm text-gray-300">of 10 max LTS</p>
      </div>
      <h2 className="absolute bottom-16 font-medium left-0 text-center right-0">
        1st Semester -2nd Semester
      </h2>
    </div>
  );
};

export default PerformanceChart;
