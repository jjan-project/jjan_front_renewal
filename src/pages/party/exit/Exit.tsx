import { IconChevronLeftLarge } from "jjan-icon";
import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Header } from "@/components/header";
import { Layout } from "@/components/layout";
import { Spacing } from "@/components/spacing";
import { Stack } from "@/components/stack";
import { TextArea } from "@/components/textField";
import { Typo } from "@/components/typo";
import { exitParty } from "@/services/internal/party/http";

const Exit = () => {
  const { partyId } = useParams();
  const navigate = useNavigate();

  const ref = useRef<HTMLTextAreaElement>(null);

  const [isValidate, setIsValidate] = useState(false);

  const onValidate = async () => {
    const value = ref.current?.value;

    if (!value || value.length < 2) {
      setIsValidate(true);
      return;
    }

    try {
      await exitParty(partyId);
      navigate("/party-explore");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Layout
      header={
        <Header
          leftIcon={<IconChevronLeftLarge onClick={() => navigate(-1)} />}
        >
          모임 나가기
        </Header>
      }
      footer={<Button onClick={onValidate}>완료</Button>}
    >
      <Box padding="0 20px">
        <Stack>
          <Typo appearance="body1">정말 모임을 나가시나요?</Typo>
          <Spacing direction="vertical" size="5px" />

          <Typo appearance="body2" color="gray700">
            나가시는 이유를 적어주세요.
          </Typo>
          <Typo appearance="body2" color="gray700">
            모임장께 퇴장알림과 함께 이유가 전달됩니다.
          </Typo>
        </Stack>

        <Spacing direction="vertical" size="66px" />
        <TextArea
          ref={ref}
          minLength={20}
          maxLength={100}
          width="100%"
          height="202px"
        />

        <Spacing direction="vertical" size="10px" />
        <Typo appearance="body2" color="violet100">
          {isValidate && "이유를 적어주세요."}
        </Typo>
      </Box>
    </Layout>
  );
};

export { Exit };
