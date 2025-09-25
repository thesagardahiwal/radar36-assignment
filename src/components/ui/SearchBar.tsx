interface SearchBarProps {
  placeholder?: string;
}

export default function SearchBar({ placeholder }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="bg-[#0000001A] rounded-lg px-3 py-2"
    />
  );
}
