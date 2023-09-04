import { IconCamera } from "jjan-icon";

import * as S from "./UploaderUI.styles";

import { RenderProps } from "@/components/form/imageUploader";

const UploaderUI = (props: RenderProps) => {
  const { files, handleClick } = props;

  return (
    <S.Container onClick={handleClick}>
      {files.length > 0 && files[0] !== undefined ? (
        <S.Img src={URL.createObjectURL(files[0])} />
      ) : (
        <S.Default>
          <IconCamera width="72px" height="64px" />
        </S.Default>
      )}
    </S.Container>
  );
};

export { UploaderUI };
