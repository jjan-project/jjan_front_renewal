import * as S from "./Skeleton.style";
import { SkeletonProps } from "./types";

const Skeleton = (props: SkeletonProps) => {
  const { radius = "0px", trimEdges = false } = props;
  return (
    <S.Container data-testid="skeleton-container" {...props}>
      <S.Div radius={radius} trimEdges={trimEdges}>
        <S.Bar />
      </S.Div>
    </S.Container>
  );
};

export { Skeleton };
