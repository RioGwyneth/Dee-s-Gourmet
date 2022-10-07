import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import IconAddImage from "../../assets/icons/IconAddImage";

export default function ImageUploader({ imageStorage }) {
  const [images, setImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const file = reader.result;
        setImages((imgs) => [...imgs, file]);
      };

      reader.readAsDataURL(file);

      const binaryReader = new FileReader();

      binaryReader.onabort = () => console.log("file reading was aborted");
      binaryReader.onerror = () => console.log("file reading has failed");
      binaryReader.onload = () => {
        const file = reader.result;
        imageStorage((oldValues) => ({
          ...oldValues,
          p_img: file,
        }));
      };

      binaryReader.readAsArrayBuffer(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="relative h-36 rounded-lg border-2 border-dashed border-TextSecondary  "
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <div className="flex  items-center justify-center">
          <p>Drop the files here ...</p>
        </div>
      ) : (
        <div className="top-0 bottom-0 left-0 right-0 h-full overflow-auto md:absolute">
          <div className="flex h-full w-full flex-col items-center justify-center p-4 text-center">
            <div className="mb-4 flex flex-col items-center">
              <IconAddImage />
              <p className="text-sm">Drag and Drop Images here</p>
              <p className="text-sm"> or click to select files</p>
            </div>

            <div>
              {images.map((img) => (
                <img src={img} className="rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
