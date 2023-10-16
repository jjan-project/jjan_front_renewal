import { IconChevronLeftLarge, IconLocationPlus } from "jjan-icon";
import { Fragment, useState } from "react";

import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Header } from "@/components/header";
import { Input } from "@/components/input";
import { Layout } from "@/components/layout";
import { List } from "@/components/list";
import { ProgressBar } from "@/components/progressbar";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";
import { useFindNeighborhoods } from "@/hooks/useFindNeighborhoods";
import { useGeoLocation } from "@/hooks/useGeoLocation";
import { SignupSubPageProps } from "@/pages/signup/types";
import {
  setAddress,
  setLatitude,
  setLongitude,
  useSignupDispatch,
  useSignupState,
} from "@/store/signupStore";

const Address = (props: SignupSubPageProps) => {
  const { address } = useSignupState();
  const { curStep, lastStep, onPrevStep, onNextStep } = props;
  const dispatch = useSignupDispatch();
  const {
    geoLocation: { latitude, longitude },
  } = useGeoLocation();

  const { data: addresses, isLoading } = useFindNeighborhoods({
    latitude,
    longitude,
  });
  const [value, setValue] = useState<string>(address || "");

  const handleNext = () => {
    dispatch(setAddress(value));
    dispatch(setLatitude(latitude));
    dispatch(setLongitude(longitude));
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
        >
          회원가입
        </Header>
      }
      footer={
        <Button type="submit" onClick={handleNext}>
          다음
        </Button>
      }
    >
      <Box padding="0 20px" height="calc(100dvh - 174px)">
        <Flex flexDirection="column" gap="42px" justifyContent="space-between">
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
            {isLoading && (
              <Typo appearance="body1">동네를 불러오는중입니다...</Typo>
            )}
            <List height="40vh" overflow="scroll" gap="18px" hideScrollbar>
              {addresses &&
                addresses.map((address_name, index) => (
                  <Fragment key={index}>
                    <Typo
                      appearance="body2"
                      onClick={() => setValue(address_name)}
                    >
                      {address_name}
                    </Typo>
                  </Fragment>
                ))}
            </List>
          </Stack>
          <ProgressBar curStep={curStep} totalSteps={lastStep} />
        </Flex>
      </Box>
    </Layout>
  );
};

export { Address };
