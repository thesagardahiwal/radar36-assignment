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
    { device: "Other", count: 5 },
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
                    <BarChart
                        data={data}
                        barGap={10}
                        margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                        <XAxis dataKey="device" stroke="#6b7280" axisLine={false} tickLine={false} />
                        <YAxis stroke="#6b7280" axisLine={false} tickLine={false} />
                        <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} />
                        <Legend />

                        <Bar
                            dataKey="count"
                            fill="#3b82f6"
                            radius={[12, 12, 12, 12]} // rounded all corners
                            barSize={24}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>

            </div>
        </div>
    );
}
