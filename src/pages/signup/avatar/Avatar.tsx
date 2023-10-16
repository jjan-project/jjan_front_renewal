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
import { Layout } from "@/components/layout";
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
  const { curStep, lastStep, onPrevStep, onNextStep } = props;
  const dispatch = useSignupDispatch();

  const handleNext = (data: AvatarSchemaType) => {
    const { avatar } = data;
    if (avatar[0]) {
      dispatch(setAvatar(avatar[0]));
    }
    onNextStep();
  };

  return (
    <Layout
      header={
        <Header
          leftIcon={
            <IconChevronLeftLarge
              onClick={onPrevStep}
              width="14px"
              height="24px"
            />
          }
        >
          회원가입
        </Header>
      }
      footer={
        <Button type="submit" form="avatarForm">
          다음
        </Button>
      }
    >
      <Box padding="0 20px" height="calc(100dvh - 174px)">
        <Flex flexDirection="column" gap="42px" justifyContent="space-between">
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
          <ProgressBar curStep={curStep} totalSteps={lastStep} />
        </Flex>
      </Box>
    </Layout>
  );
};

export { Avatar };
