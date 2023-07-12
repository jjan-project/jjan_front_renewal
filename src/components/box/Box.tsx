import * as S from "./Box.styles";
import { BoxProps } from "./types";

const Box = (props: BoxProps) => {
  const { children, ...restProps } = props;
  return <S.Box {...restProps}>{children}</S.Box>;
};

export { Box };
