export type OutputFormat = 'png' | 'jpeg' | 'webp';

export interface ConversionResult {
  blob: Blob;
  filename: string;
}

export async function convertImage(
  file: File,
  format: OutputFormat
): Promise<ConversionResult> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Failed to get canvas context'));
          return;
        }

        ctx.drawImage(img, 0, 0);

        const mimeType = `image/${format === 'jpeg' ? 'jpeg' : format}`;
        const quality = format === 'jpeg' ? 0.9 : undefined;

        canvas.toBlob(
          (blob) => {
            URL.revokeObjectURL(url);
            if (!blob) {
              reject(new Error('Failed to convert image'));
              return;
            }

            const originalName = file.name.split('.').slice(0, -1).join('.');
            const filename = `${originalName}.${format}`;

            resolve({ blob, filename });
          },
          mimeType,
          quality
        );
      } catch (error) {
        URL.revokeObjectURL(url);
        reject(error);
      }
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Failed to load image'));
    };

    img.src = url;
  });
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
