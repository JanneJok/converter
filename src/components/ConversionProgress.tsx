interface ConversionProgressProps {
  current: number;
  total: number;
}

export function ConversionProgress({ current, total }: ConversionProgressProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full">
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>Converting images...</span>
        <span>
          {current} / {total}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
