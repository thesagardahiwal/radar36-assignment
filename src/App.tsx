import { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import NotificationPanel from "./components/layout/NotificationPanel";
import DashboardHeader from "./components/dashboard/DashboardHeader";
import OverviewCards from "./components/dashboard/OverviewCards";
import ChartsSection from "./components/dashboard/ChartsSection";
import MembersActivities from "./components/dashboard/MembersActivities";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [isNotificationOpen, setNotificationOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div
        className={`flex flex-col flex-1 transition-all ${
          isNotificationOpen ? "mr-[280px]" : "mr-0"
        }`}
      >
        <Navbar
          onToggleNotifications={() => setNotificationOpen((prev) => !prev)}
        />

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Routes>
            <Route path="/" element={<Dashboard isNotificationOpen={isNotificationOpen} />} />
            <Route path="*" element={<div>Welcome to Radar 36! Select a dashboard to get started.</div>} />
          </Routes>
        </main>
      </div>

      <NotificationPanel
        onClose={() => setNotificationOpen(false)}
        isOpen={isNotificationOpen}
      />
    </div>
  );
}
