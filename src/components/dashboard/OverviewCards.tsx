import OverviewCard from "./OverviewCard";
import { Folder, Activity, ShieldAlert, Users } from "lucide-react";

export default function OverviewCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6">
      <OverviewCard
        title="Total Projects"
        value="7,265"
        icon={<Folder className="h-5 w-5 text-purple-500" />}
        change="+11.01%"
        color="#F9F1FF"
      />
      <OverviewCard
        title="Active Projects"
        value="3,671"
        icon={<Activity className="h-5 w-5 text-blue-500" />}
        change="-0.03%"
        color="#E9F4FF"
      />
      <OverviewCard
        title="Vulnerabilities"
        value="156"
        icon={<ShieldAlert className="h-5 w-5 text-pink-500" />}
        change="+15.03%"
        color="#F9F1FF"
      />
      <OverviewCard
        title="Clients"
        value="2,318"
        icon={<Users className="h-5 w-5 text-sky-500" />}
        change="+6.08%"
        color="#E9F4FF"
      />
    </div>
  );
}
