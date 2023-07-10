import * as S from "./Header.styles";
import type { HeadrProps } from "./types";

const Header = (props: HeadrProps) => {
  const { leftIcon, children, rightIcon } = props;

  return (
    <S.Header>
      <S.LeftIconWrapper>{leftIcon}</S.LeftIconWrapper>
      <S.Title>{children}</S.Title>
      <S.RightIconWrapper>{rightIcon}</S.RightIconWrapper>
    </S.Header>
  );
};

export { Header };
