import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { name: "Jan", value: 10 },
  { name: "Feb", value: 20 },
  { name: "Mar", value: 30 },
  { name: "Apr", value: 15 },
  { name: "May", value: 18 },
  { name: "Jun", value: 22 },
  { name: "Jul", value: 17 },
  { name: "Aug", value: 27 },
  { name: "Sep", value: 24 },
  { name: "Oct", value: 32 },
  { name: "Nov", value: 28 },
  { name: "Dec", value: 20 },
];

export function ActivityChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 10, left: 10, bottom: 10 }}
        barCategoryGap={20} // spacing between bars
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          stroke="#6b7280"
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          stroke="#6b7280"
        />
        <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} />
        <Bar
          dataKey="value"
          fill="#6366f1"
          radius={[12, 12, 12, 12]} // rounded pill-like bars
          barSize={24} // bar thickness
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
