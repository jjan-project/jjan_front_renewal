import styled from "@emotion/styled";

export const OverlayContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OverlayText = styled.div`
  position: absolute;
  color: white;
  font-weight: bold;
`;

export const AvatarContainer = styled.div`
  display: flex;
  position: relative;
`;

export const AvatarPositioner = styled.div<{ index: number }>`
  position: absolute;
  left: ${props => props.index * 25}px;
  z-index: ${props => 4 - props.index};
  background-color: ${props => (props.index === 3 ? "gray" : "transparent")};
  border-radius: 50%;
`;
