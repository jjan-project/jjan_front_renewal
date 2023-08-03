import * as S from "./Flex.styles";
import { FlexItem } from "./flexItem";
import { FlexProps } from "./types";

const FlexBase = (props: FlexProps) => {
  const { children, ...restProps } = props;

  return <S.Flex {...restProps}>{children}</S.Flex>;
};

const Flex = Object.assign(FlexBase, { Item: FlexItem });

export { Flex };
