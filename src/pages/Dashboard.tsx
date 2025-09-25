import ProjectActivityCard from "../components/dashboard/ProjectActivityCard"
import ChartsSection from "../components/dashboard/ChartsSection"
import DashboardHeader from "../components/dashboard/DashboardHeader"
import MembersActivities from "../components/dashboard/MembersActivities"
import OverviewCards from "../components/dashboard/OverviewCards"

function Dashboard({ isNotificationOpen }: { isNotificationOpen: boolean }) {
    return (
        <div>
            <DashboardHeader />
            <OverviewCards />
            <div className="mt-6">
                <ChartsSection isNotificationOpen={isNotificationOpen} />
            </div>
            <div className="mt-6">
                <ProjectActivityCard/>
            </div>
            <div className="mt-6">
                <MembersActivities />
            </div>
        </div>
    )
}

export default Dashboard