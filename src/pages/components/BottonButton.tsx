import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Spacing } from "@/components/spacing";

const BottomButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Box>
      <Spacing direction="vertical" size="90px" />
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          height: "90px",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          padding: "20px",
        }}
      >
        <Button onClick={onClick}>다음</Button>
      </div>
    </Box>
  );
};

export { BottomButton };
