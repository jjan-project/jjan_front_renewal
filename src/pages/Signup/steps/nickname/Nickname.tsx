import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../../../../../components/button";
import { Flex } from "../../../../../components/flex";
import { Form } from "../../../../../components/form";
import { ProgressBar } from "../../../../../components/progressbar/ProgressBar";
import { Typo } from "../../../../../components/typo";
import { SignupStepProps } from "../../types";

import { NicknameSchemaType, nicknameSchema } from "./schema";

import {
  useSignupState,
  useSignupDispatch,
  setNickname,
} from "@/store/signupStore";

const Nickname = (props: SignupStepProps) => {
  const { curStep, maxStep, onNextStep } = props;
  const dispatch = useSignupDispatch();
  const handleNext = (data: NicknameSchemaType) => {
    const { nickname } = data;
    dispatch(setNickname(nickname));
    onNextStep();
  };

  return (
    <Flex flexDirection="column" flexGrow="1">
      <Typo
        appearance="header1"
        style={{
          marginBottom: "122.41px",
        }}
      >
        닉네임을 만드세요 !
      </Typo>
      <Flex flexDirection="column" flexGrow="1" justifyContent="space-between">
        <Form
          onSubmit={handleNext}
          resolver={zodResolver(nicknameSchema)}
          mode="onSubmit"
        >
          <Form.Input
            appearance="underline"
            type="text"
            name="nickname"
            placeholder="닉네임을 입력해주세요."
            defaultValue={useSignupState().nickname}
          />
          <Flex flexDirection="column" gap="2.688rem">
            <ProgressBar value={curStep} steps={maxStep} />
            <Button appearance="primary" type="submit">
              다음
            </Button>
          </Flex>
        </Form>
      </Flex>
    </Flex>
  );
};

export { Nickname };
