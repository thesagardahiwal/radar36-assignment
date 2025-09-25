import { type ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
  onClick?: () => void;
}

export default function IconButton({ icon, onClick }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-full hover:bg-gray-100 flex items-center justify-center"
    >
      {icon}
    </button>
  );
}
