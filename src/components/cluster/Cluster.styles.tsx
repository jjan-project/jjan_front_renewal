import styled from "@emotion/styled";

export const Container = styled.div<{ gap?: string }>`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ gap }) => (gap ? gap : undefined)};
`;
