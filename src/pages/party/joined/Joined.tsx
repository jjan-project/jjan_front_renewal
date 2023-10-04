import { IconChevronLeftLarge } from "jjan-icon";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { BottomButton } from "../../components";

import { Box } from "@/components/box";
import { Header } from "@/components/header";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";
import { Layout } from "@/pages/components/layout";

const Joined = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { partyId } = useParams();

  const params = new URLSearchParams(location.search);
  const partyTitle = params.get("partyTitle");
  const onChat = () => {
    navigate(`/chat-room/${partyId}`);
  };

  const HeaderContainer = (
    <Header leftIcon={<IconChevronLeftLarge onClick={() => navigate(-1)} />}>
      {partyTitle ? partyTitle : "모임 제목이 없습니다."}
    </Header>
  );

  return (
    <Layout
      header={HeaderContainer}
      bottom={<BottomButton text="이동" onClick={onChat} />}
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
