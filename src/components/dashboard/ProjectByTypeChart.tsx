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
  Cell,
} from "recharts";

const data = [
  { device: "Web", count: 8 },
  { device: "Mobile", count: 6 },
  { device: "Design", count: 3 },
  { device: "Other", count: 1 },
];

const COLORS = [
  "#3b82f6",     // blue
  "#10b981",  // green
  "#f59e0b",  // amber
  "#ef4444",   // red
];

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
            <XAxis dataKey="device" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip />
            <Legend />
                <Bar dataKey="count" stackId="a">
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
