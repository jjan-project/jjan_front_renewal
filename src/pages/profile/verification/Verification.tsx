import { IconCancel, IconChevronLeftLarge } from "jjan-icon";
import { useNavigate } from "react-router-dom";

import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Header } from "@/components/header";
import { Spacing } from "@/components/spacing";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";
import { useCreateMap } from "@/hooks/maps";
import { useFindNeighborhoods } from "@/hooks/useFindNeighborhoods";
import { useGeoLocation } from "@/hooks/useGeoLocation";
import { Layout } from "@/pages/components/layout";

const HeaderContainer = () => {
  const navigate = useNavigate();

  return (
    <Header
      leftIcon={<IconChevronLeftLarge onClick={() => navigate(-1)} />}
      rightIcon={
        <IconCancel onClick={() => navigate("/profile", { replace: true })} />
      }
    >
      동네 인증
    </Header>
  );
};

const Verification = () => {
  const {
    geoLocation: { latitude, longitude },
  } = useGeoLocation();

  const { data, isError, isLoading } = useFindNeighborhoods({
    latitude,
    longitude,
  });

  const { mapComponent } = useCreateMap({
    latitude,
    longitude,
    mapLevel: 3,
    mapClickEnabled: false,
    options: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      markerEnabled: true,
    },
  });

  return (
    <Layout header={<HeaderContainer />}>
      <Box padding="0 20px" height="calc(100dvh - 52px - 20px)">
        <Flex flexDirection="column" gap="36px">
          <Stack>
            <Typo appearance="header2">동네인증은 필수입니다!</Typo>
            <Typo appearance="body2" color="gray700">
              짠은 우리 동네 이웃과 교류할 수 잇는 서비스예요.
            </Typo>
            <Typo appearance="body2" color="gray700">
              동네이웃임을 확인하기 위해 동네인증을 하고있어요.
            </Typo>
          </Stack>
          {mapComponent()}
          {!isError && !isLoading && (
            <Typo appearance="body3">
              현재 위치가 내 동네로 설정한{" "}
              <Typo appearance="body3" color="violet100">
                {data[0]}
              </Typo>
              에 있습니다.
            </Typo>
          )}
          <Stack>
            <Spacing direction="vertical" fill={true} />
            <Button appearance="primary" type="submit" form="profileEditForm">
              인증 완료
            </Button>
            <Spacing direction="vertical" size="32px" />
          </Stack>
        </Flex>
      </Box>
    </Layout>
  );
};

export { Verification };
