import Card from "../ui/Card";
import { ActivityChart } from "./ActivityChart";

export default function ProjectActivityCard() {
  return (
    <Card className="p-4 bg-[#F9F9FA]">
      <h3 className="font-medium mb-3">Projects Activity</h3>
      <ActivityChart />
    </Card>
  );
}
