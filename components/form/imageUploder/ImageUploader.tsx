import React, { useRef } from "react";
import { useFormContext } from "react-hook-form";

import { Input } from "../../input";

import { ImageUploaderProps } from "./types";

const ImageUploader = (props: ImageUploaderProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { register, watch } = useFormContext();
  const { render, name, multiple } = props;
  const { ref, ...rest } = register(name);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div style={{ cursor: "pointer" }}>
      <Input
        type="file"
        multiple={multiple}
        {...rest}
        ref={e => {
          ref(e);
          fileInputRef.current = e;
        }}
        style={{ display: "none" }}
      />
      {render && render({ files: watch(name), handleClick })}
    </div>
  );
};

export { ImageUploader };
