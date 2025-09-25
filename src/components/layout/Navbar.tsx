import { Search, Bell, Sun } from "lucide-react";

export default function Navbar({ onToggleNotifications }: { onToggleNotifications: () => void }) {
  return (
    <header className="flex items-center justify-between border-b border-gray-300 px-6 py-3 bg-white">
      <div>
        <h2 className="text-lg font-semibold">Good Morning, Charlie</h2>
        <p className="text-sm mt-2 text-gray-500">Here’s an overview of your projects, vulnerabilities & more..</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-3 py-2 rounded-lg bg-[#0000001A] text-sm"
          />
          <Search className="h-4 w-4 absolute left-3 top-2.5 text-gray-400" />
        </div>
        <button
          onClick={onToggleNotifications}
          className="relative p-2 rounded-full hover:bg-gray-100"
        >
          <Sun color="black" className="h-5 w-5 text-gray-100" />
        </button>
        <button
          onClick={onToggleNotifications}
          className="relative p-2 rounded-full hover:bg-[#EDEEFC]"
        >
          <Bell color="black" className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
      </div>
    </header>
  );
}
