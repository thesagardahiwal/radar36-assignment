import BarChartCard from "./ProjectActivityCard";
import PieChartCard from "./PieChartCard";
import ProjectByTypeChart from "./ProjectByTypeChart";

interface ChartsSectionProps {
  isNotificationOpen: boolean;
}

export default function ChartsSection({ isNotificationOpen }: ChartsSectionProps) {
  return (
    <div
      className={`grid gap-4 transition-all ${
        isNotificationOpen ? "grid-cols-1 md:grid-cols-[1fr]" : "grid-cols-2"
      }`}
    >
      <ProjectByTypeChart />
      <PieChartCard />
    </div>
  );
}
