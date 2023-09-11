import styled from "@emotion/styled";

import { Typo } from "@/components/typo";
import { Color, colors } from "@/theme/foundation";

type TagBaseProps = {
  text: string;
};

type TagStyleProps = {
  backgroundColor?: Color;
  color?: Color;
};

type TagProps = TagStyleProps & TagBaseProps;

const Tag = styled.div<Omit<TagStyleProps, "color">>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  border-radius: 18px;
  padding: 4px 20px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : colors.violet100};
`;

const S = {
  Tag,
};

const TagBox = (props: TagProps) => {
  const { text, color, ...otherProps } = props;
  return (
    <S.Tag {...otherProps}>
      <Typo appearance="body2" color={color ? color : "white"}>
        {text}
      </Typo>
    </S.Tag>
  );
};

export { TagBox };
