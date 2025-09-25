"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", Web: 5, Mobile: 3, Design: 2, Other: 1 },
  { month: "Feb", Web: 6, Mobile: 4, Design: 3, Other: 2 },
  { month: "Mar", Web: 7, Mobile: 5, Design: 3, Other: 1 },
  { month: "Apr", Web: 4, Mobile: 2, Design: 1, Other: 0 },
  { month: "May", Web: 8, Mobile: 6, Design: 4, Other: 2 },
  { month: "Jun", Web: 6, Mobile: 4, Design: 2, Other: 1 },
];

const COLORS = {
  Web: "#3b82f6",     // blue
  Mobile: "#10b981",  // green
  Design: "#f59e0b",  // amber
  Other: "#ef4444",   // red
};

export default function ProjectByTypeChart() {
  return (
    <div className="bg-[#F9F9FA] rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Projects by Type</h2>
        {/* Month selector */}
        <select className="border rounded-md text-sm px-2 py-1">
          <option>Jan - Jun</option>
          <option>Jul - Dec</option>
        </select>
      </div>
      <div className="w-full h-64">
        <ResponsiveContainer>
          <BarChart data={data} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Web" stackId="a" fill={COLORS.Web} />
            <Bar dataKey="Mobile" stackId="a" fill={COLORS.Mobile} />
            <Bar dataKey="Design" stackId="a" fill={COLORS.Design} />
            <Bar dataKey="Other" stackId="a" fill={COLORS.Other} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
