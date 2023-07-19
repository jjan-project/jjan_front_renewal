import { IconChevronLeftLarge } from "jjan-icon";
import { useNavigate } from "react-router-dom";

import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Header } from "@/components/header";
import { Spacing } from "@/components/spacing";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";

const SignupComplete = () => {
  const navigate = useNavigate();

  const handlePrev = () => {
    navigate("/landing", {
      replace: true,
    });
  };

  const handleSignin = () => {
    navigate("/landing", {
      replace: true,
    });
  };

  return (
    <Box height="100vh" padding="0 20px">
      <Flex flexDirection="column" gap="42px">
        <Header
          leftIcon={
            <IconChevronLeftLarge
              onClick={handlePrev}
              width="14px"
              height="24px"
            />
          }
        >
          회원가입
        </Header>
        <Stack>
          <Typo appearance="header2">회원가입이 완료되었습니다.</Typo>
          <Typo appearance="body2" color="gray100">
            즐거운 짠! 친구들과 짠! 마술처럼 짠!
          </Typo>
        </Stack>
        <Spacing direction="vertical" fill={true} />
        <Box>
          <Button onClick={handleSignin}>로그인</Button>
          <Spacing direction="vertical" size="32px" />
        </Box>
      </Flex>
    </Box>
  );
};

export { SignupComplete };
