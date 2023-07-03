import { useState } from "react";

import { Button } from "../../../../../components/button";
import { Flex } from "../../../../../components/flex";
import { ProgressBar } from "../../../../../components/progressbar/ProgressBar";
import { Select } from "../../../../../components/select";
import { Typo } from "../../../../../components/typo";
import { SignupStepProps } from "../../types";

import { GENDERS } from "./constants";
import { GenderSelectOption, GenderState } from "./types";

import {
  useSignupState,
  useSignupDispatch,
  setGender,
} from "@/store/signupStore";

const Gender = (props: SignupStepProps) => {
  const { curStep, maxStep, onNextStep } = props;
  const [gender, setGenderState] = useState<GenderState>(
    useSignupState().gender,
  );
  const dispatch = useSignupDispatch();
  const handleNext = () => {
    dispatch(setGender(gender));
    onNextStep();
  };

  return (
    <Flex flexDirection="column" flexGrow="1">
      <Typo
        appearance="header1"
        style={{
          marginBottom: "117px",
        }}
      >
        성별을 선택해주세요.
      </Typo>
      <Flex flexDirection="column" flexGrow="1" justifyContent="space-between">
        <div>
          <Flex justifyContent="center">
            <Select
              options={GENDERS}
              value={gender}
              onChange={value => setGenderState(value as GenderSelectOption)}
            />
          </Flex>
          <hr
            style={{
              padding: "0px",
              margin: "0px",
              borderTop: "1px solid #bbb",
              width: "100%",
            }}
          />
        </div>
        <Flex flexDirection="column" gap="2.688rem">
          <ProgressBar value={curStep} steps={maxStep} />
          <Button appearance="primary" onClick={handleNext}>
            다음
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export { Gender };
