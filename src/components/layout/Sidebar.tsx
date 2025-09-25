"use client";
import {
  Home,
  Briefcase,
  Users,
  FileText,
  Layers,
  Folder,
  Activity,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: Home, link: "/" },
  { name: "Projects", icon: Briefcase, link: "/projects" },
  { name: "Clients", icon: Users, link: "/clients" },
  { name: "Team Members", icon: FileText, link: "/team-members" },
  { name: "Scope", icon: Layers, link: "/scope" },
  { name: "Files", icon: Folder, link: "/files" },
  { name: "Activity", icon: Activity, link: "/activity" },
];

const generalItems = [
  { name: "Settings", icon: Settings, link: "/settings" },
  { name: "Help & Support", icon: HelpCircle, link: "/help" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-60 h-screen border-gray-300 border-r bg-white flex flex-col justify-between">
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 p-4 font-bold text-lg">
          <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded">
            R
          </div>
          Radar 36
        </div>

        {/* Main Menu */}
        <div className="mt-8 px-4 text-sm text-gray-800">Menu</div>
        <nav className="mt-6">
          <ul className="space-y-1 px-4">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.link;
              return (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className={`flex items-center relative gap-3 px-4 py-2 rounded transition-colors ${
                      isActive
                        ? "bg-indigo-50 text-indigo-600 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {isActive && <div className="h-8 w-1 absolute left-0 bg-indigo-600 rounded-md"/>}
                    <item.icon
                      className={`h-5 w-5 ${
                        isActive ? "text-indigo-600" : "text-gray-500"
                      }`}
                    />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* General Items */}
        <div className="mt-8 px-4 text-sm text-gray-800">Generals</div>
        <nav className="mt-2">
          {generalItems.map((item) => {
            const isActive = location.pathname === item.link;
            return (
              <Link
                key={item.name}
                to={item.link}
                className={`flex items-center gap-3 px-4 py-2 rounded transition-colors ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.icon
                  className={`h-5 w-5 ${
                    isActive ? "text-indigo-600" : "text-gray-500"
                  }`}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout */}
      <button className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 text-red-600 font-medium">
        <LogOut className="h-5 w-5" /> Log out
      </button>
    </aside>
  );
}
