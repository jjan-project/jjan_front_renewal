import * as S from "./Preview.styles";

import { Flex } from "@/components/flex";

const Preview = ({
  files,
  onDelete,
}: {
  files: File[];
  onDelete: (target: number) => void;
}) => {
  return (
    <Flex gap="8px">
      {files.map((file, index) => (
        <S.Wrapper key={index} onClick={() => onDelete(index)}>
          <S.Img src={URL.createObjectURL(file)} />
          <button>delete</button>
        </S.Wrapper>
      ))}
    </Flex>
  );
};

export { Preview };
