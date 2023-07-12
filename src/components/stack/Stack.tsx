import * as S from "./Stack.styles";
import { StackProps } from "./types";

const Stack = (props: StackProps) => {
  const { children, ...restProps } = props;
  return <S.Stack {...restProps}>{children}</S.Stack>;
};

export { Stack };
