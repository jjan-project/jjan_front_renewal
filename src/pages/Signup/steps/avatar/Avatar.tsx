import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../../../../../components/button";
import { Flex } from "../../../../../components/flex";
import { Form } from "../../../../../components/form";
import { ProgressBar } from "../../../../../components/progressbar/ProgressBar";
import { Typo } from "../../../../../components/typo";
import { SignupStepProps } from "../../types";

import { ACCEPTED_IMAGE_TYPES } from "./constants";
import { AvatarSchemaType, AvatarSchema } from "./schema";
import UploaderUI from "./uploader/Uploader";

import {
  useSignupState,
  useSignupDispatch,
  setAvatar,
} from "@/store/signupStore";

const Avatar = (props: SignupStepProps) => {
  const { nickname } = useSignupState();
  const { curStep, maxStep, onNextStep } = props;
  const dispatch = useSignupDispatch();
  const handleNext = (data: AvatarSchemaType) => {
    const { avatar } = data;
    dispatch(setAvatar(avatar[0]));
    onNextStep();
  };

  return (
    <Flex flexDirection="column" flexGrow="1">
      <Flex flexDirection="column" gap="1px">
        <Typo appearance="header1">거의 다 왔어요 !</Typo>
        <Typo
          appearance="body2"
          color="gray600"
          style={{
            marginBottom: "71px",
          }}
        >
          프로필로 사용하실 사진을 선택해주세요.
        </Typo>
      </Flex>
      <Form onSubmit={handleNext} resolver={zodResolver(AvatarSchema)}>
        <Flex flexDirection="column" gap="35px">
          <Flex justifyContent="center" alignItems="center">
            <Form.ImageUploader
              name="avatar"
              accept={ACCEPTED_IMAGE_TYPES.join(",")}
              render={props => <UploaderUI {...props} />}
            />
          </Flex>
          <Flex flexDirection="column" alignItems="center">
            <Typo appearance="header1">{nickname}</Typo>
            <hr
              style={{
                padding: "0px",
                margin: "0px",
                borderTop: "1px solid #bbb",
                width: "100%",
              }}
            />
          </Flex>
        </Flex>
        <Flex flexDirection="column" gap="2.688rem">
          <ProgressBar value={curStep} steps={maxStep} />
          <Button appearance="primary" type="submit">
            다음
          </Button>
        </Flex>
      </Form>
    </Flex>
  );
};

export { Avatar };
