import { zodResolver } from "@hookform/resolvers/zod";
import { IconCancel, IconChevronLeftLarge } from "jjan-icon";
import { useState } from "react";

import { ACCEPTED_IMAGE_TYPES } from "./constants";
import { ProfileEditSchemaType, profileEditSchema } from "./schema";
import { UploaderUI } from "./uploaderUi";

import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Form } from "@/components/form/Form";
import { Header } from "@/components/header";
import { Slider } from "@/components/slider";
import { Spacing } from "@/components/spacing";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";
import { Layout } from "@/pages/components/layout";
import {
  DISPLAY_TEXT_MAP,
  SLIDER_MAX_VALUE,
  SLIDER_MIN_VALUE,
  STEP,
} from "@/pages/signup/capacity/constants";

const HeaderContainer = (
  <Header leftIcon={<IconChevronLeftLarge />} rightIcon={<IconCancel />}>
    프로필 수정
  </Header>
);

const Edit = () => {
  // 유저 정보 전역 상태 가져오는 로직 추가해야 함
  const [localCapacity, setLocalCapacity] = useState<number>(0);

  const handleChange = (formData: ProfileEditSchemaType) => {
    // eslint-disable-next-line no-console
    console.log(formData);
    // eslint-disable-next-line no-console
    console.log(localCapacity);
    // 유저 정보 수정 api 호출
    // 유저 정보 전역 상태 업데이트
  };

  return (
    <Layout header={HeaderContainer}>
      <Box padding="0 20px" height="calc(100dvh - 52px - 20px)">
        <Flex flexDirection="column">
          <Stack>
            <Form
              onSubmit={handleChange}
              resolver={zodResolver(profileEditSchema)}
              id="profileEditForm"
            >
              <Box centerContent>
                <Form.ImageUploader
                  name="avatar"
                  accept={ACCEPTED_IMAGE_TYPES.join(",")}
                  render={props => <UploaderUI {...props} />}
                />
              </Box>
              <Spacing direction="vertical" size="28px" />
              <Form.Input
                name="nickname"
                appearance="underline"
                type="text"
                defaultValue={"예시 디폴트 값입니다."}
              />
            </Form>
          </Stack>
          <Stack>
            <Spacing direction="vertical" size="74px" />
            <Typo appearance="header2">주량</Typo>
            <Box centerContent>
              <Typo appearance="header2">
                {DISPLAY_TEXT_MAP[localCapacity]}
              </Typo>
            </Box>
            <Slider
              min={SLIDER_MIN_VALUE}
              max={SLIDER_MAX_VALUE}
              step={STEP}
              value={localCapacity}
              setValue={setLocalCapacity}
            />
          </Stack>
          <Spacing direction="vertical" fill={true} />
          <Button appearance="primary" type="submit" form="profileEditForm">
            수정
          </Button>
          <Spacing direction="vertical" size="32px" />
        </Flex>
      </Box>
    </Layout>
  );
};

export { Edit };
