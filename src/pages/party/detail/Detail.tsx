import {
  IconChevronLeftLarge,
  IconBookmark,
  IconClock,
  IconLocationOn,
  IconPeopleInvite,
} from "jjan-icon";

import { BottomButton } from "../../components/layout";

import glassesImg from "@/assets/glasses.png";
import testImage from "@/assets/회기 꽃술 6인팟!!.png";
import { Avatar } from "@/components/avatar";
import { Box } from "@/components/box";
import { Flex } from "@/components/flex";
import { Header } from "@/components/header";
import { Hr } from "@/components/hr";
import { ImageCarousel } from "@/components/imageCarousel";
import { List } from "@/components/list";
import { Spacing } from "@/components/spacing";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";
import { Layout } from "@/pages/components/layout";

const Detail = () => {
  const images = [glassesImg, testImage];

  const onJoined = () => {
    console.info("");
  };

  const HeaderContainer = (
    <Header leftIcon={<IconChevronLeftLarge />} rightIcon={<IconBookmark />}>
      회기 꽃술 6인팟!!
    </Header>
  );

  return (
    <Layout
      header={HeaderContainer}
      bottom={<BottomButton onClick={onJoined} />}
    >
      <Box width="100%" height="220px">
        <ImageCarousel type="primary" images={images} />
      </Box>

      <Box padding="0 20px">
        <Spacing direction="vertical" size="15px" />

        <Stack space="space03">
          <Typo appearance="body1">회기 꽃술 6인팟!!</Typo>

          <Stack space="space02">
            <Typo appearance="body2">
              경희대 근처 사시는 20대 남녀 모두 환영합니다. 같이 즐겁게 술
              마셔요!
            </Typo>
            {/* 여기는 파티 태그 자리입니다. */}
          </Stack>

          <Hr />

          <Stack space="space02">
            <Typo appearance="body2" color="violet100">
              참여 모임원 10명
            </Typo>
            <Flex>
              <Typo appearance="body2">남: 5</Typo>
              <Spacing direction="horizontal" size="10px" />
              <Typo appearance="body2">여: 5</Typo>
            </Flex>

            <List gap="5px" direction="row">
              {Array.from({ length: 10 }).map((_, index) => (
                <Avatar
                  key={index}
                  src={glassesImg}
                  width="39px"
                  height="39px"
                  style={{ borderRadius: "50%" }}
                ></Avatar>
              ))}
            </List>
          </Stack>

          <Hr />

          <Stack space="space02">
            <Typo appearance="body2" color="violet100">
              장소 및 일정
            </Typo>

            <Flex gap="10px" alignItems="center">
              <IconClock />
              <Typo appearance="body2">6월 23일 오후 6시</Typo>
            </Flex>
            <Flex gap="10px" alignItems="center">
              <IconLocationOn />
              <Typo appearance="body2">
                서울특별시 동대문구 경희대로1길 8-14 1층
              </Typo>
            </Flex>
            <Flex gap="10px" alignItems="center">
              <IconPeopleInvite />
              <Typo appearance="body2">최대 6명</Typo>
            </Flex>
          </Stack>
        </Stack>
      </Box>
    </Layout>
  );
};

export { Detail };
