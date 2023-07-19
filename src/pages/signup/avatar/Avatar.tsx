import { zodResolver } from "@hookform/resolvers/zod";
import { IconChevronLeftLarge } from "jjan-icon";

import { ACCEPTED_IMAGE_TYPES } from "./constants";
import { AvatarSchemaType, avatarSchema } from "./schema";
import { UploaderUI } from "./uploaderUi";

import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Form } from "@/components/form/Form";
import { Header } from "@/components/header";
import { ProgressBar } from "@/components/progressbar";
import { Spacing } from "@/components/spacing";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";
import { SignupSubPageProps } from "@/pages/signup/types";
import {
  setAvatar,
  useSignupDispatch,
  useSignupState,
} from "@/store/signupStore";

const Avatar = (props: SignupSubPageProps) => {
  const { nickname } = useSignupState();
  const { curStep, lastStep, onNextStep, onPrevStep } = props;
  const dispatch = useSignupDispatch();

  const handlePrev = () => {
    onPrevStep();
  };

  const handleNext = (data: AvatarSchemaType) => {
    const { avatar } = data;
    dispatch(setAvatar(avatar[0]));
    onNextStep();
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
          <Stack>
            <Typo appearance="header2">거의 다 왔어요!</Typo>
            <Typo appearance="body2" color="gray100">
              프로필로 사용하실 사진을 선택해주세요.
            </Typo>
          </Stack>
          <Spacing direction="vertical" size="72px" />
          <Form
            onSubmit={handleNext}
            resolver={zodResolver(avatarSchema)}
            mode="onSubmit"
            id="avatarForm"
          >
            <Box centerContent>
              <Form.ImageUploader
                name="avatar"
                accept={ACCEPTED_IMAGE_TYPES.join(",")}
                render={props => <UploaderUI {...props} />}
              />
            </Box>
          </Form>
          <Spacing direction="vertical" size="36px" />
          <Box centerContent>
            <Typo appearance="header1">{nickname}</Typo>
          </Box>
        </Stack>
        <Spacing direction="vertical" fill={true} />
        <Box>
          <ProgressBar curStep={curStep} totalSteps={lastStep} />
          <Spacing direction="vertical" size="42px" />
          <Button type="submit" form="avatarForm">
            다음
          </Button>
          <Spacing direction="vertical" size="32px" />
        </Box>
      </Flex>
    </Box>
  );
};

export { Avatar };
