import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Spacing } from "@/components/spacing";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";

const Landing = () => {
  return (
    <Box height="100vh" padding="0 20px">
      <Spacing direction="vertical" size="188px" />
      <Typo as="h1" appearance="header1">
        안녕하세요
      </Typo>
      <Typo as="h1" appearance="header1">
        짠 하러 오셨군요!
      </Typo>
      <Spacing direction="vertical" size="200px" />
      <Button as="a" href="/auth/signup">
        회원가입
      </Button>
      <Spacing direction="vertical" size="12px" />
      <Stack align="center">
        <Typo appearance="body1">
          아이디가 있으신가요?&nbsp;
          <Typo as="a" appearance="body1" color="violet200" href="/auth/signin">
            로그인
          </Typo>
          하기
        </Typo>
        <Typo as="a" appearance="body2">
          비밀번호 찾기
        </Typo>
      </Stack>
    </Box>
  );
};

export { Landing };
