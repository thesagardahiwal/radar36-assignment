import ProjectActivityCard from "../components/dashboard/ProjectActivityCard"
import ChartsSection from "../components/dashboard/ChartsSection"
import DashboardHeader from "../components/dashboard/DashboardHeader"
import MembersActivities from "../components/dashboard/MembersActivities"
import OverviewCards from "../components/dashboard/OverviewCards"
import PieChartCard from "../components/dashboard/PieChartCard"
import { pieChartData } from "../utils/charts"

function Dashboard({ isNotificationOpen }: { isNotificationOpen: boolean }) {
  return (
    <div>
      <DashboardHeader />
      {isNotificationOpen ? (
        // Overview cards with pie chart on right
        <OverviewCards>
          <PieChartCard showChart={isNotificationOpen} showInfo={false} data={pieChartData} isNotificationOpen={isNotificationOpen} />
        </OverviewCards>
      ) : (
        // Normal overview cards
        <OverviewCards />
      )}

      <div className="mt-6">
        {/* keep data list of pie chart + other charts */}
        <ChartsSection isNotificationOpen={isNotificationOpen} />
      </div>
      <div className="mt-6">
        <ProjectActivityCard />
      </div>
      <div className="mt-6">
        <MembersActivities />
      </div>
    </div>
  );
}

export default Dashboard;