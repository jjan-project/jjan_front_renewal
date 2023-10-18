import { ReactNode } from "react";

type LayoutProps = {
  header?: ReactNode;
  footer?: ReactNode;
  paddingHeader?: boolean;
  paddingFooter?: boolean;
  children: ReactNode;
};

export type { LayoutProps };
