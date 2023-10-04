import * as S from "./UploaderUI.styles";

import { RenderProps } from "@/components/form/imageUploader";

type EditProfileUploadUIProps = {
  renderProps: RenderProps;
  defaultImg: string;
};

const UploaderUI = (props: EditProfileUploadUIProps) => {
  const {
    renderProps: { files, handleClick },
    defaultImg,
  } = props;

  return (
    <S.Container onClick={handleClick}>
      {files.length > 0 && files[0] !== undefined ? (
        <S.Img src={URL.createObjectURL(files[0])} />
      ) : (
        <S.Img src={defaultImg} />
      )}
    </S.Container>
  );
};

export { UploaderUI };
