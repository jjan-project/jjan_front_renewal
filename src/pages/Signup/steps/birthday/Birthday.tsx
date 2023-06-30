import { Button } from "../../../../../components/button";
import { Flex } from "../../../../../components/flex";
import { ProgressBar } from "../../../../../components/progressbar/ProgressBar";
import { Select } from "../../../../../components/select";
import { Typo } from "../../../../../components/typo";
import { SignupStepProps } from "../../types";

import { YEARS } from "./constants";
import { BirthdaySelectOption } from "./types";
import useBirthday from "./useBirthday";

import { getMonths, getDays } from "@/pages/Signup/steps/birthday/utils";
import {
  useSignupState,
  useSignupDispatch,
  setBirthday,
} from "@/store/signupStore";

const Birthday = (props: SignupStepProps) => {
  const defaultBirthDay = useSignupState().birthday;
  const { curStep, maxStep, onNextStep } = props;
  const [birthday, handleBirthdayChange] = useBirthday(defaultBirthDay);
  const { year, month, day } = birthday;
  const dispatch = useSignupDispatch();
  const handleNext = () => {
    dispatch(setBirthday({ year, month, day }));
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
        생년월일을 알려주세요.
      </Typo>
      <Flex flexDirection="column" flexGrow="1" justifyContent="space-between">
        <div>
          <Flex justifyContent="center">
            <Select
              options={YEARS}
              value={year}
              onChange={value =>
                handleBirthdayChange(value as BirthdaySelectOption, "year")
              }
            />
            <Select
              options={getMonths()}
              value={month}
              onChange={value =>
                handleBirthdayChange(value as BirthdaySelectOption, "month")
              }
            />
            <Select
              options={getDays(month.value, year.value)}
              value={day}
              onChange={value =>
                handleBirthdayChange(value as BirthdaySelectOption, "day")
              }
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

export { Birthday };
