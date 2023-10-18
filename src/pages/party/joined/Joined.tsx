import { IconChevronLeftLarge } from "jjan-icon";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Header } from "@/components/header";
import { Layout } from "@/components/layout";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";

const Joined = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { partyId } = useParams();

  const params = new URLSearchParams(location.search);
  const partyTitle = params.get("partyTitle");
  const onChat = () => {
    navigate(`/chat-room/${partyId}`);
  };

  return (
    <Layout
      header={
        <Header
          leftIcon={<IconChevronLeftLarge onClick={() => navigate(-1)} />}
        >
          {partyTitle ? partyTitle : "모임 제목이 없습니다."}
        </Header>
      }
      footer={<Button onClick={onChat}>이동</Button>}
    >
      <Box padding="0 20px">
        <Stack>
          <Typo appearance="body1">참여가 완료 되었습니다!</Typo>
          <Typo appearance="body2" color="gray700">
            채팅방이 생성되었습니다. 채팅방으로 이동해주세요
          </Typo>
        </Stack>
      </Box>
    </Layout>
  );
};

export { Joined };
