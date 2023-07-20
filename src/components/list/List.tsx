import * as S from "./List.styles";
import { ListProps } from "./types";

const List = (props: ListProps) => {
  const { children, ...restProps } = props;

  return (
    <S.List {...restProps} role="list">
      {children}
    </S.List>
  );
};

export { List };
