import {
  IconChevronLeftLarge,
  IconBookmark,
  IconClock,
  IconLocationOn,
  IconPeopleInvite,
} from "jjan-icon";
import { useParams, useNavigate } from "react-router-dom";

import { TagBox } from "./TagBox";
import { useDetailData } from "./useDetailData";

import { Avatar } from "@/components/avatar";
import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Cluster } from "@/components/cluster";
import { Flex } from "@/components/flex";
import { Header } from "@/components/header";
import { Hr } from "@/components/hr";
import { ImageCarousel } from "@/components/imageCarousel";
import { Layout } from "@/components/layout";
import { List } from "@/components/list";
import { Spacing } from "@/components/spacing";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";
import { joinParty } from "@/services/internal/party/http";
import { formatToKoreanDateTime } from "@/utils/date";

const PartyImages = ({ images }: { images?: string[] }) => (
  <Box width="100%" height="220px">
    {images && images.length ? (
      <ImageCarousel type="primary" images={images} />
    ) : (
      <Box centerContent height="100%" backgroundColor="gray800">
        <Typo appearance="body2">사진이 존재하지 않습니다.</Typo>
      </Box>
    )}
  </Box>
);

const Detail = () => {
  const navigate = useNavigate();
  const { partyId } = useParams();
  const { responseDetail, isJoined } = useDetailData(partyId);

  const onJoined = async () => {
    try {
      await joinParty(partyId);
      navigate(
        `/party-joined/${partyId}?partyTitle=${responseDetail?.data.title}`,
      );
    } catch (e) {
      console.error(e);
    }
  };

  const onExit = () => {
    navigate(`/party-exit/${partyId}`);
  };

  return (
    <Layout
      header={
        <Header
          leftIcon={<IconChevronLeftLarge onClick={() => navigate(-1)} />}
          rightIcon={<IconBookmark />}
        >
          {responseDetail?.data.title || ""}
        </Header>
      }
      footer={
        <Button onClick={isJoined ? onExit : onJoined}>
          {isJoined ? "참여 취소" : "참여"}
        </Button>
      }
    >
      <PartyImages images={responseDetail?.data.partyImages} />

      <Box padding="0 20px">
        <Spacing direction="vertical" size="15px" />
        <Stack space="space03">
          <Typo appearance="body1">
            {responseDetail?.data.title || "제목이 없습니다."}
          </Typo>

          <Stack space="space02">
            <Typo appearance="body2">
              {responseDetail?.data.content || "내용이 존재하지 않습니다."}
            </Typo>
            <Cluster gap="10px">
              {responseDetail
                ? responseDetail?.data.partyTags.map((tagName, index) => (
                    <TagBox key={index} text={tagName} />
                  ))
                : ""}
            </Cluster>
          </Stack>

          <Hr />

          <Stack space="space02">
            <Typo appearance="body2" color="violet100">
              참여 모임원{" "}
              {responseDetail
                ? responseDetail?.data.female + responseDetail?.data.male
                : "0"}
              명
            </Typo>
            <Flex>
              <Typo appearance="body2">
                남: {responseDetail?.data.male || "0"}
              </Typo>
              <Spacing direction="horizontal" size="10px" />
              <Typo appearance="body2">
                여: {responseDetail?.data.female || "0"}
              </Typo>
            </Flex>

            <List gap="5px" direction="row" hideScrollbar>
              {responseDetail
                ? responseDetail?.data.joinUser.map((userInfo, index) => (
                    <Avatar
                      key={index}
                      src={userInfo.profile}
                      width="39px"
                      height="39px"
                      style={{ borderRadius: "50%" }}
                    ></Avatar>
                  ))
                : ""}
            </List>
          </Stack>

          <Hr />

          <Stack space="space02">
            <Typo appearance="body2" color="violet100">
              장소 및 일정
            </Typo>

            <Flex gap="10px" alignItems="center">
              <IconClock />
              <Typo appearance="body2">
                {responseDetail
                  ? formatToKoreanDateTime(responseDetail?.data.partyDate)
                  : "시간 정보가 없습니다."}
              </Typo>
            </Flex>
            <Flex gap="10px" alignItems="center">
              <IconLocationOn />
              <Typo appearance="body2">
                {responseDetail?.data.location.address ||
                  "주소명이 존재하지 않습니다."}
              </Typo>
            </Flex>
            <Flex gap="10px" alignItems="center">
              <IconPeopleInvite />
              <Typo appearance="body2">
                {`최대 ${responseDetail?.data.maxPartyNum}명` ||
                  "최대 인원이 설정되지 않았습니다."}
              </Typo>
            </Flex>
          </Stack>
        </Stack>
      </Box>
    </Layout>
  );
};

export { Detail };
