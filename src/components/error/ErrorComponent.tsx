import { IconCancel } from "jjan-icon";

import { Box } from "../box";
import { Header } from "../header";
import { Spacing } from "../spacing";
import { Stack } from "../stack";
import { Typo } from "../typo";

import * as S from "./ErrorComponent.styles";
import { ErrorComponentProps } from "./types";

export const ErrorComponent = ({
  resetError,
  error,
  errorImg,
}: ErrorComponentProps) => {
  const { message, detailMessage, fixText, func } = error;
  return (
    <Box height="100dvh" centerContent>
      <S.Header>
        <Header
          rightIcon={<IconCancel onClick={() => resetError()} />}
        ></Header>
      </S.Header>
      <Stack align="center">
        <S.Image src={errorImg} />
        <Spacing direction="vertical" size="40px" />

        <Box padding="0 80px">
          <Stack align="center">
            <Typo appearance="body1">{message}</Typo>
            <Spacing direction="vertical" size="10px" />
            <Typo appearance="body2" color="gray600">
              {detailMessage}
            </Typo>
          </Stack>
        </Box>

        <Spacing direction="vertical" size="70px" />

        <S.Button onClick={() => (func ? func() : resetError())}>
          <Typo appearance="body2">{fixText}</Typo>
        </S.Button>
      </Stack>
    </Box>
  );
};
