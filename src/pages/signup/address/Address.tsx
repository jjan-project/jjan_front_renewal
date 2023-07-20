import { IconChevronLeftLarge, IconLocationPlus } from "jjan-icon";
import { Fragment, useState } from "react";

import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Header } from "@/components/header";
import { Input } from "@/components/input";
import { List } from "@/components/list";
import { ProgressBar } from "@/components/progressbar";
import { Spacing } from "@/components/spacing";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";
import { useFindNeighborhoods } from "@/hooks/useFindNeighborhoods";
import { useGeoLocation } from "@/hooks/useGeoLocation";
import { SignupSubPageProps } from "@/pages/signup/types";
import {
  setLocation,
  useSignupDispatch,
  useSignupState,
} from "@/store/signupStore";

/**
 * @todo
 * 주소 가져오는 방식 api => sdk 변경 후 수정
 */

const Address = (props: SignupSubPageProps) => {
  const { location } = useSignupState();
  const { curStep, lastStep, onNextStep, onPrevStep } = props;
  const dispatch = useSignupDispatch();
  const {
    geoLocation: { latitude, longitude },
  } = useGeoLocation();
  const { data: addresses } = useFindNeighborhoods({ latitude, longitude });
  useFindNeighborhoods({ latitude, longitude });
  const [value, setValue] = useState<string>(location || "");

  const handlePrve = () => {
    onPrevStep();
  };

  const handleNext = () => {
    dispatch(setLocation(value));
    onNextStep();
  };

  return (
    <Box height="100vh" padding="0 20px">
      <Flex flexDirection="column" gap="42px">
        <Header
          leftIcon={
            <IconChevronLeftLarge
              onClick={handlePrve}
              width="14px"
              height="24px"
            />
          }
        >
          회원가입
        </Header>
        <Typo appearance="header2">동네를 선택해주세요</Typo>
        <Stack space="space06">
          <Input
            type="text"
            name="address"
            appearance="underline"
            icon={<IconLocationPlus />}
            value={value}
            onChange={e => setValue(e.target.value)}
            isValid={true}
          />
          <List height="40vh" overflow="scroll" gap="18px">
            {addresses &&
              addresses.documents.map(({ address_name }, index) => (
                <Fragment key={index}>
                  <Typo
                    appearance="header2"
                    onClick={() => setValue(address_name)}
                  >
                    {address_name}
                  </Typo>
                </Fragment>
              ))}
          </List>
        </Stack>
        <Spacing direction="vertical" fill={true} />
        <Box>
          <ProgressBar curStep={curStep} totalSteps={lastStep} />
          <Spacing direction="vertical" size="42px" />
          <Button onClick={handleNext}>다음</Button>
          <Spacing direction="vertical" size="32px" />
        </Box>
      </Flex>
    </Box>
  );
};

export { Address };
