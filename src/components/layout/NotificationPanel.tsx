import { X } from "lucide-react";

const notifications = [
  { text: "You fixed a bug.", time: "Just now" },
  { text: "New user registered.", time: "59 minutes ago" },
  { text: "Andi Lane subscribed to you.", time: "Today, 11:59 AM" },
];

export default function NotificationPanel({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <aside
      className={`fixed top-0 right-0 h-full w-72 bg-white border-gray-300 border-l shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-300">
        <h3 className="font-semibold text-gray-800">Notifications</h3>
        <button onClick={onClose}>
          <X className="h-5 w-5 text-gray-500" />
        </button>
      </div>
      <ul className="overflow-y-auto h-[calc(100%-3rem)]">
        {notifications.map((n, idx) => (
          <li key={idx} className="p-4 text-sm gap-2 flex items-start">
            <div className="h-8 w-8 rounded-lg bg-[#E6F1FD]"></div>
            <div>
                <p className="text-gray-800">{n.text}</p>
                <span className="text-gray-500 text-xs">{n.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
