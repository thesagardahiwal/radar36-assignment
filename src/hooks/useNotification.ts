import { useState } from "react";

export default function useNotification() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return { isOpen, toggle };
}
