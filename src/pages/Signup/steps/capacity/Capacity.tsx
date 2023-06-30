import { useState } from "react";

import { Button } from "../../../../../components/button";
import { Flex } from "../../../../../components/flex";
import { ProgressBar } from "../../../../../components/progressbar/ProgressBar";
import { Slider } from "../../../../../components/slider";
import { Typo } from "../../../../../components/typo";
import { SignupStepProps } from "../../types";
import { birthdayToDateString } from "../birthday/utils";

import glassesImg from "@/assets/images/glasses.png";
import { useSignupState } from "@/store/signupStore";

type DisplayText = {
  [key: number]: string;
};

const displayText: DisplayText = {
  0: "0병 ~ 0.5병",
  1: "0.5병 ~ 1병",
  2: "1.5병 ~ 2병",
  3: "2.5병 ~ 3병",
  4: "3병이상",
};

const Capacity = (props: SignupStepProps) => {
  const {
    email,
    password,
    location,
    birthday,
    gender,
    nickname,
    avatar,
    capacity,
  } = useSignupState();
  const [localCapacity, setLocalCapacity] = useState<number>(capacity || 0);
  const { curStep, maxStep } = props;

  const handleNext = () => {
    const formData = new FormData();

    const stringifiedBirthday = birthdayToDateString(
      birthday.year.value,
      birthday.month.value,
      birthday.day.value,
    );

    const formFields = {
      email,
      password,
      location,
      birthday: stringifiedBirthday,
      gender: gender.value,
      nickname,
      avatar: avatar as File,
      // avatar: "Asdsadsad",
      capacity: localCapacity.toString(),
    };

    Object.entries(formFields).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // console.log(formData.get("email"));
    // console.log(formData.get("password"));
    // console.log(formData.get("location"));
    // console.log(formData.get("birthday"));
    // console.log(formData.get("gender"));
    // console.log(formData.get("nickname"));
    // console.log(formData.get("capacity"));
    // console.log(formData.get("avatar"));

    // fetch("http://15.165.160.232:8080/api/user/join", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => {
    //     console.error("Error:", error);
    //   });
  };

  return (
    <Flex flexDirection="column" flexGrow="1">
      <Typo
        appearance="header1"
        style={{
          marginBottom: "124px",
        }}
      >
        본인의 주량을 알려주세요.
      </Typo>
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Flex flexDirection="column" gap="58px">
          <Flex justifyContent="center" alignItems="center">
            <img src={glassesImg} width={"173px"} height={"164px"} />
          </Flex>
          <Flex flexDirection="column" alignItems="center" gap="22px">
            <Typo appearance="header2">{displayText[localCapacity]}</Typo>
            <Slider
              min={0}
              max={4}
              step={1}
              value={localCapacity}
              setValue={setLocalCapacity}
            />
          </Flex>
        </Flex>
        <Flex flexDirection="column" gap="2.688rem">
          <ProgressBar value={curStep} steps={maxStep} />
          <Button appearance="primary" onClick={handleNext}>
            다음
          </Button>
        </Flex>
      </div>
    </Flex>
  );
};

export { Capacity };
