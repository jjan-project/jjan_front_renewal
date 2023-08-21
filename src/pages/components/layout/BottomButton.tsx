import styled from "@emotion/styled";

import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Spacing } from "@/components/spacing";

const BottomButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 90px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 20px;
`;

const BottomButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Box>
      <Spacing direction="vertical" size="90px" />
      <BottomButtonContainer>
        <Button onClick={onClick}>다음</Button>
      </BottomButtonContainer>
    </Box>
  );
};

export { BottomButton };
