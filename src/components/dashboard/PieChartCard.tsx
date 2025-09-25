import Card  from "../../components/ui/Card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Critical", value: 52.1, color: "#ef4444" },
  { name: "High", value: 22.8, color: "#f97316" },
  { name: "Medium", value: 13.9, color: "#facc15" },
  { name: "Info", value: 11.2, color: "#3b82f6" },
];

export default function PieChartCard() {
  return (
    <Card className="p-4 bg-[#FFF4F1] flex flex-col items-center">
      <h3 className="font-medium mb-4">Vulnerabilities</h3>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={50}
            outerRadius={80}
            paddingAngle={3}
          >
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <ul className="mt-4 text-sm space-y-1">
        {data.map((d, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ background: d.color }}
            />
            {d.name} - {d.value}%
          </li>
        ))}
      </ul>
    </Card>
  );
}
