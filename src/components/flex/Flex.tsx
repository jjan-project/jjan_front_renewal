import * as S from "./Flex.styles";
import { FlexProps } from "./types";

const Flex = (props: FlexProps) => {
  const { children, ...restProps } = props;

  return <S.Flex {...restProps}>{children}</S.Flex>;
};

export { Flex };
