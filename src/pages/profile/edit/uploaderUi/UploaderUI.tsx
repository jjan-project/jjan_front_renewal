import * as S from "./UploaderUI.styles";

import { RenderProps } from "@/components/form/imageUploader";

const UploaderUI = (props: RenderProps) => {
  const { files, handleClick } = props;

  return (
    <S.Container onClick={handleClick}>
      {files ? <S.Img src={URL.createObjectURL(files[0])} /> : <S.Default />}
    </S.Container>
  );
};

export { UploaderUI };
