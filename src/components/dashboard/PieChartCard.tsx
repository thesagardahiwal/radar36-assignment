import Card from "../../components/ui/Card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import PieChartData from "./PieChartData";



export default function PieChartCard({
    isNotificationOpen = false,
    data,
    showChart,
    showInfo,
}: {
    isNotificationOpen?: boolean;
    data: { name: string; value: number; color: string }[];
    showChart: boolean;
    showInfo: boolean;
}) {
    return (
        <Card className={`p-4 bg-[#FFF4F1] w-full justify-center relative flex ${isNotificationOpen ? "flex-col justify-center" : ""} items-center`}>
            {showChart && (
                <>
                    <h3 className="font-medium absolute top-3 left-3 mb-4">
                        Vulnerabilities
                    </h3>
                    <ResponsiveContainer width={isNotificationOpen ? "100%" : "50%"} height={200}>
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
                </>
            )}
            {isNotificationOpen && (
                <div className=" absolute -bottom-20 w-full bg-[#FFF4F1] h-22"/>
            )}
            {showInfo && (
                <PieChartData data={data} />
            )}
        </Card>
    );
}
