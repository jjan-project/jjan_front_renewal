import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { IconCancel, IconChevronLeftLarge } from "jjan-icon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { userRoutes } from "@/router";

import { ACCEPTED_IMAGE_TYPES } from "./constants";
import { ProfileEditSchemaType, profileEditSchema } from "./schema";
import { UploaderUI } from "./uploaderUi";

import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Form } from "@/components/form/Form";
import { Header } from "@/components/header";
import { Layout } from "@/components/layout";
import { Slider } from "@/components/slider";
import { Spacing } from "@/components/spacing";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";
import {
  DISPLAY_TEXT_MAP,
  SLIDER_MAX_VALUE,
  SLIDER_MIN_VALUE,
  STEP,
} from "@/pages/signup/capacity/constants";
import { JJAN_URL } from "@/services/internal/domain";
import { updateDrinkCapacity } from "@/services/internal/user/http";
import { useFetchUserInfo } from "@/services/internal/user/query";
import {
  useUpdateAvatar,
  useUpdateNickname,
} from "@/services/internal/user/query";

const HeaderContainer = () => {
  const navigate = useNavigate();

  return (
    <Header
      leftIcon={<IconChevronLeftLarge onClick={() => navigate(-1)} />}
      rightIcon={
        <IconCancel onClick={() => navigate("/profile", { replace: true })} />
      }
    >
      프로필 수정
    </Header>
  );
};

const Edit = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutateAvatar = useUpdateAvatar();
  const mutateNickname = useUpdateNickname();
  //const mutateDrinkCapacity = useUpdateDrinkCapacity();

  const { data: userInfo } = useFetchUserInfo();

  const [localCapacity, setLocalCapacity] = useState(
    Number(userInfo?.drinkCapacity) | 0,
  );

  const handleChange = async (validatedData: ProfileEditSchemaType) => {
    try {
      if (userInfo?.nickName !== validatedData.nickname) {
        await mutateNickname.mutateAsync(validatedData.nickname);
      }

      if (validatedData.avatar[0] !== undefined) {
        const formDate = new FormData();
        formDate.append("image", validatedData.avatar[0]);
        await mutateAvatar.mutateAsync(formDate);
      }

      const localCapacityString = localCapacity
        ? localCapacity.toString()
        : "0";
      if (userInfo?.drinkCapacity !== localCapacityString) {
        //mutateDrinkCapacity.mutateAsync(localCapacityString);
        await updateDrinkCapacity(localCapacityString);
      }

      queryClient.invalidateQueries([
        `${JJAN_URL}/${userRoutes.userInfo}`,
        null,
      ]);
      navigate("/profile");
    } catch (error) {
      console.error(error);
    }
  };

  if (!userInfo) return;

  return (
    <Layout
      header={<HeaderContainer />}
      footer={
        <Button appearance="primary" type="submit" form="profileEditForm">
          수정
        </Button>
      }
    >
      <Box padding="0 20px" height="calc(100dvh - 174px)">
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
                  render={props => (
                    <UploaderUI
                      renderProps={props}
                      defaultImg={userInfo.profile as string}
                    />
                  )}
                />
              </Box>
              <Spacing direction="vertical" size="28px" />
              <Form.Input
                name="nickname"
                appearance="underline"
                type="text"
                defaultValue={userInfo.nickName}
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
        </Flex>
      </Box>
    </Layout>
  );
};

export { Edit };
