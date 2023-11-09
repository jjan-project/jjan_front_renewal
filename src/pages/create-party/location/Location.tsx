import { IconCancel, IconChevronLeftLarge, IconSearch } from "jjan-icon";
import { useState } from "react";

import { LocationSearch } from "./search";

import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Header } from "@/components/header";
import { Input } from "@/components/input";
import { Layout } from "@/components/layout";
import { ProgressBar } from "@/components/progressbar";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";
import { useCreateMap } from "@/hooks/maps";
import { useGeoLocation } from "@/hooks/useGeoLocation";
import { PartyFormSubPageProps } from "@/pages/create-party/types";
import {
  PartyLocation,
  setLocation,
  usePartyFormDispatch,
  usePartyFormState,
} from "@/store/partyStore";

const Location = (props: PartyFormSubPageProps) => {
  const [showSearch, setShowSearch] = useState(false);
  const { location } = usePartyFormState();
  const [localLocation, setLocalLocation] = useState(location);
  const { curStep, lastStep, onPrevStep, onNextStep } = props;
  const dispatch = usePartyFormDispatch();

  // 현재 개발용으로 컴포넌트 마운트 시 geolocation 훅으로 위치를 가져오나
  // 이후, 유저별 저장된 위치 정보로부터 가져올 예정
  const {
    geoLocation: { latitude, longitude },
  } = useGeoLocation();

  const { mapComponent } = useCreateMap({
    latitude: localLocation?.latitude ? localLocation.latitude : latitude || 0,
    longitude: localLocation?.longitude
      ? localLocation.longitude
      : longitude || 0,
    mapLevel: 3,
    mapClickEnabled: false,
    options: {
      markerEnabled: {},
    },
  });

  const handleNext = () => {
    dispatch(setLocation(localLocation as PartyLocation));

    onNextStep();
  };

  return (
    <>
      {showSearch && (
        <LocationSearch
          onClose={setShowSearch}
          onChange={setLocalLocation}
          location={localLocation}
        />
      )}
      {!showSearch && (
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
              모임 만들기
            </Header>
          }
          footer={<Button onClick={handleNext}>다음</Button>}
        >
          <Box height="calc(100dvh - 174px)">
            <Flex
              flexDirection="column"
              gap="42px"
              justifyContent="space-between"
            >
              <Box padding="0 20px">
                <Stack>
                  <Typo appearance="header1">어디에서 만날까요?</Typo>
                  <Typo appearance="body1" color="gray700">
                    모임 장소를 정해주세요.
                  </Typo>
                </Stack>
              </Box>
              <Box height="45dvh">{mapComponent()}</Box>
              <Box
                padding="0 20px"
                onClick={() => setShowSearch(prev => !prev)}
              >
                <Input
                  appearance="underline"
                  placeholder="장소 검색"
                  value={localLocation ? localLocation.place : undefined}
                  icon={<IconSearch />}
                  disabled
                  isValid
                />
              </Box>
              <Box padding="0 20px">
                <ProgressBar curStep={curStep} totalSteps={lastStep} />
              </Box>
            </Flex>
          </Box>
        </Layout>
      )}
    </>
  );
};

export { Location };
