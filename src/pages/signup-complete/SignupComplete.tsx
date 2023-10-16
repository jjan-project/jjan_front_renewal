import { IconChevronLeftLarge } from "jjan-icon";
import { useNavigate } from "react-router-dom";

import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Header } from "@/components/header";
import { Layout } from "@/components/layout";
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
    /**
     * @todo
     * 추후 자동 로그인 구현
     */
  };

  return (
    <Layout
      header={
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
      }
      footer={<Button onClick={handleSignin}>로그인</Button>}
    >
      <Box padding="0 20px">
        <Typo as="h2" appearance="header2">
          회원가입이 완료되었습니다.
        </Typo>
        <Typo as="p" appearance="body2" color="gray100">
          즐거운 짠! 친구들과 짠! 마술처럼 짠!
        </Typo>
      </Box>
    </Layout>
  );
};

export { SignupComplete };
