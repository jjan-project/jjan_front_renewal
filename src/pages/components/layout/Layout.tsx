import { ReactNode } from "react";

import { Box } from "@/components/box";
import { Spacing } from "@/components/spacing";

interface LayoutProps {
  header?: ReactNode;
  bottom?: ReactNode;
  children: ReactNode;
}

const Layout = ({ header, bottom, children }: LayoutProps) => {
  return (
    <Box height="100dvh">
      <Box as="header" padding="0 20px">
        {header}
      </Box>

      <Spacing direction="vertical" size="20px" />

      <main>{children}</main>

      <Box as="footer">{bottom}</Box>
    </Box>
  );
};

export { Layout };
