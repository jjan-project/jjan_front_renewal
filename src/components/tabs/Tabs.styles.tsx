import { css } from "@emotion/react";
import styled from "@emotion/styled";

import type { TabInterface, Appearance } from "./types";

import { colors, lineHeight } from "@/theme/foundation";

export const TabsBase = styled.div`
  width: 100%;
`;

export const TabList = styled.div`
  width: 100%;
`;

const getAppearanceStyles = ({
  appearance,
  isActive,
}: Partial<{ appearance: Appearance; isActive: boolean }>) => {
  switch (appearance) {
    case "primary":
      return css`
        border-bottom: ${isActive
          ? `0.2rem solid ${colors.violet100}`
          : `0.1rem solid ${colors.gray600}`};
        background-color: ${colors.white};
      `;
    case "secondary":
      return css``;
  }
};

const baseTabStyles = css`
  border: none;
  text-align: center;
  margin-bottom: 40px;
  cursor: pointer;
  line-height: ${lineHeight[31]};

  &:disabled {
    cursor: unset;
  }
`;

export const Tab = styled.button<TabInterface>`
  ${baseTabStyles};
  height: ${({ isActive }) => (isActive ? "33px" : "32px")};
  width: ${({ width }) => `${width}%`};

  ${props => getAppearanceStyles(props)};
`;

export const Pannel = styled.div``;
