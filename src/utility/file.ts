//================================================================
/**
 * File Utility Method
 */
//================================================================

/**
 * 
 * @param imgURL 
 * 
 * @returns 
 */
export function checkBlobURL(imgURL: string) {
  return imgURL.match(/blob:/) ? true : false;
}

/**
 * 
 * @param file 
 * 
 * @returns 
 */
export function parseBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result) {
        resolve(reader.result.toString());
      } else {
        reject();
      }
    };
    reader.onerror = (error) => reject(error);
  });
}

/**
 * 
 * @param imgURL 
 * @param fileName 
 * @param mimeType 
 * 
 * @returns 
 */
export async function parseBlobFile(
  imgURL: string, 
  fileName: string, 
  mimeType: string,
): Promise<Blob> {
  return await fetch(imgURL)
    .then(r => r.blob())
    .then(blobFile => new File([blobFile], fileName, { type: mimeType }));
}

