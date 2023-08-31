import { IconChevronRightSmall } from "jjan-icon";
import { Link } from "react-router-dom";

import { Box } from "../box";
import { Flex } from "../flex";
import { Typo } from "../typo";

import { NavLinkProps } from "./types";

const NavLink = (props: NavLinkProps) => {
  const { children, link } = props;

  return (
    <Link
      to={link}
      style={{
        textDecoration: "none",
        color: "black",
      }}
    >
      <Box height="28px">
        <Flex justifyContent="space-between" alignItems="center">
          <Typo appearance="body2">{children}</Typo>
          <IconChevronRightSmall
            style={{
              cursor: "pointer",
            }}
            width="6px"
            height="10px"
          />
        </Flex>
      </Box>
    </Link>
  );
};

export { NavLink };
