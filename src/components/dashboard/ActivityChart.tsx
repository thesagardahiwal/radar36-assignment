import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

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
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#6366f1" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
