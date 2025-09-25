interface SelectProps {
  options: string[];
  onChange: (value: string) => void;
}

export default function Select({ options, onChange }: SelectProps) {
  return (
    <div className="border rounded-3xl border-gray-400 p-2 px-4">
        <select
        onChange={(e) => onChange(e.target.value)}
        className=""
        >
        {options.map((opt) => (
            <option key={opt} value={opt}>
            {opt}
            </option>
        ))}
        </select>
    </div>
  );
}
