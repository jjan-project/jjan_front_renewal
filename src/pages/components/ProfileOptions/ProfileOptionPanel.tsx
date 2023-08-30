import { ProfileOptionPanelProps } from "./types";

import { Hr } from "@/components/hr";
import { List } from "@/components/list";
import { NavLink } from "@/components/navLink";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";

const ProfileOptionPanel = (props: ProfileOptionPanelProps) => {
  const { options } = props;

  return (
    <>
      {options.map((option, index) => (
        <Stack key={index} space="space04">
          <Hr type="solid" backgroundColor="gray700" />
          <Typo appearance="body1">{option.group}</Typo>
          <List gap="12px">
            {option.terms.map((term, index) => (
              <NavLink key={index} link={term.link}>
                {term.name}
              </NavLink>
            ))}
          </List>
        </Stack>
      ))}
    </>
  );
};

export { ProfileOptionPanel };
