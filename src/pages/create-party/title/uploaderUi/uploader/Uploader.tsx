import { IconCamera } from "jjan-icon";

import * as S from "./Uploader.styles";

import { Stack } from "@/components/stack";

const Uploader = ({
  files,
  onClick,
}: {
  files: File[];
  onClick: () => void;
}) => {
  const length = files ? files.length : 0;

  return (
    <S.Wrapper onClick={onClick}>
      <Stack align="center" space="space01">
        <IconCamera width="24" height="20px" />
        {length} / 10
      </Stack>
    </S.Wrapper>
  );
};

export { Uploader };
