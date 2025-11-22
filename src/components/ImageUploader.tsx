import { useCallback } from 'react';

interface ImageUploaderProps {
  onFilesSelected: (files: File[]) => void;
  maxFiles: number;
}

export function ImageUploader({ onFilesSelected, maxFiles }: ImageUploaderProps) {
  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const files = Array.from(e.dataTransfer.files).filter((file) =>
        file.type.startsWith('image/')
      );

      if (files.length > maxFiles) {
        alert(`Maximum ${maxFiles} images allowed`);
        return;
      }

      // Track image upload
      if (files.length > 0 && (window as any).LocalAnalytics) {
        (window as any).LocalAnalytics.imageUpload(files.length);
      }

      onFilesSelected(files);
    },
    [onFilesSelected, maxFiles]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []);

      if (files.length > maxFiles) {
        alert(`Maximum ${maxFiles} images allowed`);
        return;
      }

      // Track image upload
      if (files.length > 0 && (window as any).LocalAnalytics) {
        (window as any).LocalAnalytics.imageUpload(files.length);
      }

      onFilesSelected(files);
    },
    [onFilesSelected, maxFiles]
  );

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-blue-500 transition-colors cursor-pointer"
    >
      <input
        type="file"
        id="file-input"
        multiple
        accept="image/*"
        onChange={handleFileInput}
        className="hidden"
      />
      <label htmlFor="file-input" className="cursor-pointer">
        <div className="text-gray-600">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="mt-2 text-sm">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500 mt-1">
            PNG, JPG, WebP, GIF, BMP, SVG (max {maxFiles} images)
          </p>
        </div>
      </label>
    </div>
  );
}
