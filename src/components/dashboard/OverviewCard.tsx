import Card from "../../components/ui/Card";

interface Props {
  title: string;
  value: string;
  icon: React.ReactNode;
  change: string;
  color: string;
}

export default function OverviewCard({ title, value, icon, change }: Props) {
  return (
    <Card className="flex bg-[#E9F4FF] relative items-center gap-4 p-4">
      <div className="p-2 h-10 w-10 rounded-md bg-black/5 flex items-center justify-center">{icon}</div>
      <div className="">
        <span className="text-sm text-gray-500">{title}</span>
        <p className="text-2xl mt-2 font-semibold">{value}</p>
      </div>
      <div className="absolute bottom-4 right-4">
        <div className="text-xs text-green-600">{change}</div>
      </div>
    </Card>
  );
}
