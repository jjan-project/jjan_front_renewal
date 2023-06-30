import React from "react";

import { RenderProps } from "../../../../../../components/form/imageUploder/types";

import { container, img, fallback } from "./uploader.css";

const UploaderUI = (props: RenderProps) => {
  const { files, handleClick } = props;

  return (
    <div className={container} onClick={handleClick}>
      {files ? (
        <img className={img} src={URL.createObjectURL(files[0])} />
      ) : (
        <div className={fallback}></div>
      )}
    </div>
  );
};

export default UploaderUI;
