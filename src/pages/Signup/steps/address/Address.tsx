import { IconBrokenHome } from "jjan-icon";
import React, { useState } from "react";

import { Button } from "../../../../../components/button";
import { Flex } from "../../../../../components/flex";
import { Input } from "../../../../../components/input";
import { ProgressBar } from "../../../../../components/progressbar/ProgressBar";
import { Typo } from "../../../../../components/typo";
import { SignupStepProps } from "../../types";

import { useFindNeighborhoods } from "@/hooks/useFindNeighborhoods";
import { useGeoLocation } from "@/hooks/useGeoLocation";
import {
  useSignupState,
  useSignupDispatch,
  setLocation,
} from "@/store/signupStore";

const Address = (props: SignupStepProps) => {
  const {
    geoLocation: { latitude, longitude },
  } = useGeoLocation();
  const { data: addresses } = useFindNeighborhoods({ latitude, longitude });
  const { location } = useSignupState();
  const [value, setValue] = useState<string>(location || "");
  const { curStep, maxStep, onNextStep } = props;
  const dispatch = useSignupDispatch();
  const handleNext = () => {
    dispatch(setLocation(value));
    onNextStep();
  };

  return (
    <Flex flexDirection="column" flexGrow="1">
      <Flex flexDirection="column" gap="1px">
        <Typo
          appearance="header1"
          color="gray600"
          style={{
            marginBottom: "122.41px",
          }}
        >
          동네를 선택해주세요
        </Typo>
      </Flex>
      <Input
        type="text"
        name="address"
        appearance="underline"
        icon={<IconBrokenHome />}
        value={value}
        onChange={e => setValue(e.target.value)}
        isValid={true}
        style={{
          marginBottom: "23px",
        }}
      />
      <Flex flexDirection="column" flexGrow="1" justifyContent="space-between">
        {!addresses && <></>}
        <Flex flexDirection="column" gap="18px" overflow="scroll" height="40vh">
          {addresses &&
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            addresses.map((address, index) => (
              <React.Fragment key={index}>
                <Typo appearance="header2" onClick={() => setValue(address)}>
                  {address}
                </Typo>
              </React.Fragment>
            ))}
        </Flex>
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

export { Address };
