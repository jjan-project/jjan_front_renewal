import { Box } from "../box";
import { Flex } from "../flex";

import * as S from "./Layout.styles";
import { LayoutProps } from "./types";

const Layout = (props: LayoutProps) => {
  const {
    header,
    footer,
    children,
    paddingHeader = true,
    paddingFooter = true,
  } = props;

  return (
    <Box height="100dvh">
      <Flex flexDirection="column">
        {header && (
          <Flex.Item flexShrink="0">
            <S.Header paddingHeader={paddingHeader}>{header}</S.Header>
          </Flex.Item>
        )}
        <S.Main header={header} footer={footer}>
          {children}
        </S.Main>
        {footer && (
          <Flex.Item flexShrink="0">
            <S.Footer paddingFooter={paddingFooter}>{footer}</S.Footer>
          </Flex.Item>
        )}
      </Flex>
    </Box>
  );
};

export { Layout };
