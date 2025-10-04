import { useState } from 'react';
import { ImageUploader } from './ImageUploader';
import { FormatSelector } from './FormatSelector';
import { ConversionProgress } from './ConversionProgress';
import { ConvertedImagesList } from './ConvertedImagesList';
import {
  convertImage,
  OutputFormat,
  ConversionResult,
} from '../utils/imageConverter';

const MAX_FILES = 20;

interface ImageConverterProps {
  defaultFormat?: OutputFormat;
}

export function ImageConverter({ defaultFormat = 'png' }: ImageConverterProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [outputFormat, setOutputFormat] = useState<OutputFormat>(defaultFormat);
  const [isConverting, setIsConverting] = useState(false);
  const [conversionProgress, setConversionProgress] = useState(0);
  const [convertedImages, setConvertedImages] = useState<ConversionResult[]>([]);

  const handleFilesSelected = (files: File[]) => {
    setSelectedFiles(files);
    setConvertedImages([]);
  };

  const handleAddMore = (files: File[]) => {
    const totalFiles = selectedFiles.length + files.length;
    if (totalFiles > MAX_FILES) {
      alert(`Maximum ${MAX_FILES} images allowed. You can add ${MAX_FILES - selectedFiles.length} more.`);
      return;
    }
    setSelectedFiles([...selectedFiles, ...files]);
    setConvertedImages([]);
  };

  const handleConvert = async () => {
    if (selectedFiles.length === 0) return;

    setIsConverting(true);
    setConversionProgress(0);
    setConvertedImages([]);

    const results: ConversionResult[] = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      try {
        const result = await convertImage(selectedFiles[i], outputFormat);
        results.push(result);
        setConversionProgress(i + 1);
      } catch (error) {
        console.error(`Failed to convert ${selectedFiles[i].name}:`, error);
      }
    }

    setConvertedImages(results);
    setIsConverting(false);
  };

  const handleReset = () => {
    setSelectedFiles([]);
    setConvertedImages([]);
    setConversionProgress(0);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
      {selectedFiles.length === 0 ? (
        <>
          <ImageUploader onFilesSelected={handleFilesSelected} maxFiles={MAX_FILES} />
          <p className="text-center text-sm text-gray-600 mt-4">
            All conversions happen in your browser. Your images are never uploaded to any server.
          </p>
        </>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-700">
              {selectedFiles.length} image{selectedFiles.length !== 1 ? 's' : ''} selected
            </h3>
            <div className="flex gap-3">
              {selectedFiles.length < MAX_FILES && (
                <label className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer font-medium">
                  Add More Images
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => {
                      const files = Array.from(e.target.files || []);
                      handleAddMore(files);
                      e.target.value = '';
                    }}
                    className="hidden"
                  />
                </label>
              )}
              <button
                onClick={handleReset}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Clear All
              </button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-md p-4 max-h-48 overflow-y-auto">
            <ul className="space-y-2">
              {selectedFiles.map((file, index) => (
                <li key={index} className="flex items-center justify-between text-sm">
                  <span className="text-gray-700 truncate flex-1">{file.name}</span>
                  <span className="text-gray-500 text-xs ml-2">
                    {(file.size / 1024).toFixed(1)} KB
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <FormatSelector format={outputFormat} onChange={setOutputFormat} />

          {isConverting && (
            <ConversionProgress
              current={conversionProgress}
              total={selectedFiles.length}
            />
          )}

          {!isConverting && convertedImages.length === 0 && (
            <button
              onClick={handleConvert}
              className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Convert Images
            </button>
          )}

          {convertedImages.length > 0 && (
            <ConvertedImagesList images={convertedImages} />
          )}
        </div>
      )}
    </div>
  );
}
