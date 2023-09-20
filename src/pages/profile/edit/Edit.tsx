import { zodResolver } from "@hookform/resolvers/zod";
import { IconCancel, IconChevronLeftLarge } from "jjan-icon";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ACCEPTED_IMAGE_TYPES } from "./constants";
import { ProfileEditSchemaType, profileEditSchema } from "./schema";
import { UploaderUI } from "./uploaderUi";

import { AuthResponseData } from "@/api/jjan/types";
import { fetchUserInfo } from "@/api/jjan/userController";
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
import {
  useUpdateAvatar,
  useUpdateNickname,
  useUpdateDrinkCapacity,
} from "@/query/user/useUpdateProfile";

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

  const mutateAvatar = useUpdateAvatar();
  const mutateNickname = useUpdateNickname();
  const mutateDrinkCapacity = useUpdateDrinkCapacity();

  const [userInfo, setUserInfo] = useState<AuthResponseData>();
  const [localCapacity, setLocalCapacity] = useState(0);

  const onFetchUserInfo = async () => {
    try {
      const response = await fetchUserInfo();
      setUserInfo(response);
      setLocalCapacity(+response.drinkCapacity);
    } catch (error) {
      console.error("Error while verifying JWT Token", error);
    }
  };

  useEffect(() => {
    onFetchUserInfo();
  }, []);

  const handleChange = (validatedData: ProfileEditSchemaType) => {
    try {
      if (userInfo?.nickName !== validatedData.nickname) {
        mutateNickname.mutate(validatedData.nickname);
      }

      if (validatedData.avatar[0] !== undefined) {
        const formDate = new FormData();
        formDate.append("image", validatedData.avatar[0]);
        mutateAvatar.mutate(formDate);
      }

      mutateDrinkCapacity.mutate(localCapacity);
    } catch (error) {
      console.error(error);
    }

    navigate("/profile");
  };

  if (!userInfo) return;

  return (
    <Layout header={<HeaderContainer />}>
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
