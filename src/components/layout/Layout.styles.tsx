import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactNode } from "react";

export const Main = styled.main<{ header?: ReactNode; footer?: ReactNode }>`
  overflow-y: auto;
  margin-top: ${({ header }) => (header ? "72px" : 0)};
  margin-bottom: ${({ footer }) => (footer ? "68px" : 0)};
`;

export const Header = styled.header<{ paddingHeader?: boolean }>`
  position: fixed;
  top: 0;
  width: ${({ paddingHeader }) =>
    paddingHeader ? "calc(100% - 40px)" : "100%"};
  height: 52px;
  padding: ${({ paddingHeader }) => (paddingHeader ? "0 20px" : 0)};
`;

export const Footer = styled.footer<{ paddingFooter?: boolean }>`
  position: fixed;
  bottom: 0;
  width: ${({ paddingFooter }) =>
    paddingFooter ? "calc(100% - 40px)" : "100%"};
  height: ${({ paddingFooter }) => (paddingFooter ? 102 : 68)}px;
  padding: ${({ paddingFooter }) => (paddingFooter ? "0 20px" : 0)};
  ${({ paddingFooter }) =>
    paddingFooter
      ? css`
          display: flex;
          justify-content: center;
          align-items: center;
        `
      : ""}
  background-color: white
`;
