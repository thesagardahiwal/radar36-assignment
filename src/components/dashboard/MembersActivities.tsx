import { ArrowRight } from "lucide-react";
import MemberCard from "./MemberCard";

const members = [
  {
    name: "Natali Craig",
    avatar: "https://i.pravatar.cc/40?img=1",
    content: "You have a bug that needs to be fixed",
    time: "Just now",
  },
  {
    name: "Andi Lane",
    avatar: "https://i.pravatar.cc/40?img=2",
    content: "Released a new version",
    time: "59 minutes ago",
  },
];

export default function MembersActivities() {
  return (
    <div className="px-6 bg-[#F9F9FA] py-6">
      <h3 className="font-medium mb-3">Members Activities</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {members.map((m, i) => (
          <MemberCard key={i} {...m} />
        ))}
        <div className="flex items-center justify-center text-sm font-medium">
            <span className="cursor-pointer flex items-center gap-2 text-gray-800 px-4 py-2 rounded-3xl bg-[#F3F3F3] hover:underline">
                View Full Details <ArrowRight className="inline-block h-4 w-4 ml-1" />
            </span>
        </div>
      </div>
    </div>
  );
}
