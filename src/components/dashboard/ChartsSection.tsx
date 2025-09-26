import BarChartCard from "./ProjectActivityCard";
import PieChartCard from "./PieChartCard";
import ProjectByTypeChart from "./ProjectByTypeChart";
import { pieChartData } from "../../utils/charts";
import PieChartData from "./PieChartData";

interface ChartsSectionProps {
  isNotificationOpen: boolean;
}

export default function ChartsSection({ isNotificationOpen }: ChartsSectionProps) {
  return (
    <div
      className={`grid gap-4 transition-all ${
        isNotificationOpen ? "grid-cols-1 md:grid-cols-2" : "grid-cols-2"
      }`}
    >
      <ProjectByTypeChart />
      <PieChartCard showChart={!isNotificationOpen} data={pieChartData} showInfo={true}/>
    </div>
  );
}
