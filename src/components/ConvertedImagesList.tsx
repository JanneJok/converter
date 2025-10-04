import { ConversionResult, downloadBlob } from '../utils/imageConverter';

interface ConvertedImagesListProps {
  images: ConversionResult[];
}

export function ConvertedImagesList({ images }: ConvertedImagesListProps) {
  const handleDownloadAll = () => {
    images.forEach((img) => {
      downloadBlob(img.blob, img.filename);
    });
  };

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Converted Images ({images.length})
        </h2>
        <button
          onClick={handleDownloadAll}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Download All
        </button>
      </div>

      <div className="space-y-2">
        {images.map((img, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
          >
            <span className="text-sm text-gray-700 truncate flex-1">
              {img.filename}
            </span>
            <button
              onClick={() => downloadBlob(img.blob, img.filename)}
              className="ml-4 px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100 transition-colors"
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
