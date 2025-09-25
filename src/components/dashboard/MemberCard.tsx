import Card from "../../components/ui/Card";

interface Props {
  name: string;
  avatar: string;
  content: string;
  time: string;
}

export default function MemberCard({ name, avatar, content, time }: Props) {
  return (
    <Card className="flex gap-3 bg-[#EDEEFC] items-start p-4">
      <img src={avatar} alt={name} className="w-10 h-10 rounded-full" />
      <div className="flex-1">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-600 line-clamp-1 hover:line-clamp-none transition-all cursor-pointer">
          {content}
        </p>
        <span className="text-xs text-gray-400">{time}</span>
      </div>
    </Card>
  );
}
