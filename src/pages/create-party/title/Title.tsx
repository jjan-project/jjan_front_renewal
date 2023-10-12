import { zodResolver } from "@hookform/resolvers/zod";
import { IconCancel, IconChevronLeftLarge } from "jjan-icon";

import { ACCEPTED_IMAGE_TYPES } from "./constants";
import { partyImageSchema, PartyImageSchemaType } from "./schema";
import { UploaderUI } from "./uploaderUi";

import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Form } from "@/components/form/Form";
import { Header } from "@/components/header";
import { Layout } from "@/components/layout";
import { ProgressBar } from "@/components/progressbar";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";
import { PartyFormSubPageProps } from "@/pages/create-party/types";
import {
  setTitle,
  setPhotos,
  setDescription,
  usePartyFormState,
  usePartyFormDispatch,
} from "@/store/partyStore";

const Title = (props: PartyFormSubPageProps) => {
  const { partyName, photos, description } = usePartyFormState();
  const { curStep, lastStep, onPrevStep, onNextStep } = props;
  const dispatch = usePartyFormDispatch();

  const defaultValues = {
    partyName,
    photos,
    description,
  };

  const handleNext = (data: PartyImageSchemaType) => {
    const { partyName, photos, description } = data;

    dispatch(setTitle(partyName));
    dispatch(setPhotos(photos));
    dispatch(setDescription(description));

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
          rightIcon={<IconCancel width="22px" height="22px" />}
        >
          모임만들기
        </Header>
      }
      footer={
        <Button type="submit" form="partyTitleForm">
          다음
        </Button>
      }
    >
      <Box padding="0 20px" height="calc(100dvh - 174px)">
        <Flex flexDirection="column" gap="42px" justifyContent="space-between">
          <Stack space="space11">
            <Typo appearance="header1">우리의 모임 이름은?</Typo>
            <Form
              onSubmit={handleNext}
              resolver={zodResolver(partyImageSchema)}
              defaultValues={defaultValues}
              mode="onChange"
              id="partyTitleForm"
            >
              <Stack space="space08">
                <Form.Input
                  name="partyName"
                  appearance="underline"
                  type="text"
                />
                <Stack space="space04">
                  <Typo appearance="header2">모임 대표 사진</Typo>
                  <Form.ImageUploader
                    name="photos"
                    accept={ACCEPTED_IMAGE_TYPES.join(",")}
                    render={props => <UploaderUI {...props} />}
                    mode="multiple"
                  />
                </Stack>
                <Form.Textarea name="description" width="100%" />
              </Stack>
            </Form>
          </Stack>
          <ProgressBar curStep={curStep} totalSteps={lastStep} />
        </Flex>
      </Box>
    </Layout>
  );
};

export { Title };
