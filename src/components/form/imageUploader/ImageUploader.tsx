import { useRef, useState, ChangeEvent, useEffect } from "react";
import { useFormContext } from "react-hook-form";

import { ImageUploaderProps } from "./types";

const ImageUploader = (props: ImageUploaderProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { register, setValue } = useFormContext();
  const { render, name, accept, mode = "single", testId } = props;

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;

    if (!selectedFiles) {
      return;
    }

    if (mode === "single") {
      setFiles([selectedFiles[0]]);
    }

    if (mode === "multiple") {
      setFiles(prevFiles => [...prevFiles, ...Array.from(selectedFiles)]);
    }
  };

  const handleDeleteByIndex = (target: number) => {
    setFiles(prevFiles => [
      ...prevFiles.filter((_, index) => index !== target),
    ]);
  };

  const handleDeleteAll = () => {
    setFiles([]);
  };

  useEffect(() => {
    setValue(name, files);
  }, [files]);

  return (
    <>
      <input
        type="file"
        multiple={mode === "single" ? false : true}
        {...register(name)}
        ref={e => {
          fileInputRef.current = e;
        }}
        style={{ display: "none" }}
        accept={accept}
        data-testid={testId}
        onChange={handleChange}
      />
      {render &&
        render({ files, handleClick, handleDeleteByIndex, handleDeleteAll })}
    </>
  );
};

export { ImageUploader };
