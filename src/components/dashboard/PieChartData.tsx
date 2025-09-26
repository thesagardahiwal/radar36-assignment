function PieChartData({
  data,
}: {
  data: { name: string; value: number; color: string }[];
}) {
  return (
    <div className="mt-4 w-full px-10 space-y-3">
      {data.map((d, idx) => (
        <div key={idx} className="w-full">
          {/* Label + Value */}
          <div className="flex items-center justify-between text-sm mb-1">
            <span className="font-medium">{d.name}</span>
            <span className="text-gray-600">{d.value}%</span>
          </div>

          {/* Progress bar */}
          <div className="w-full h-2 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${d.value}%`,
                backgroundColor: d.color,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PieChartData;
