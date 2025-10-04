import { OutputFormat } from '../utils/imageConverter';

interface FormatSelectorProps {
  format: OutputFormat;
  onChange: (format: OutputFormat) => void;
}

export function FormatSelector({ format, onChange }: FormatSelectorProps) {
  return (
    <div className="flex items-center gap-4">
      <label htmlFor="format" className="text-sm font-medium text-gray-700">
        Convert to:
      </label>
      <select
        id="format"
        value={format}
        onChange={(e) => onChange(e.target.value as OutputFormat)}
        className="block w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
      >
        <option value="png">PNG</option>
        <option value="jpeg">JPEG</option>
        <option value="webp">WebP</option>
      </select>
    </div>
  );
}
