import { Download } from "lucide-react";
import Button from "../../components/ui/Button";
import Select from "../../components/ui/Select";

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <h2 className="text-lg font-semibold">Dashboard Overview</h2>
      <div className="flex items-center gap-3">
        <Select options={["This Month", "Last Month", "This Year"]} onChange={() => {}} />
        <Button>
            <div className="flex items-center gap-2"> <Download size={20}/> Export Report</div>
        </Button>
      </div>
    </div>
  );
}
