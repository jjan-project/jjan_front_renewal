import { zodResolver } from "@hookform/resolvers/zod";
import { IconCamera, IconChevronLeftLarge } from "jjan-icon";

import { ACCEPTED_IMAGE_TYPES } from "../../constants";
import { ChatSchemaType, chatSchema } from "../../schema";

import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Form } from "@/components/form/Form";
import { RenderProps } from "@/components/form/imageUploader";
import { AuthResponseData } from "@/services/internal/types";

interface BottomChatInputBarProps {
  socketConnected: boolean | WebSocket | null;
  ws: boolean | WebSocket | null;
  chatId: string | undefined;
  userInfo?: AuthResponseData;
}

const BottomChatInputBar = ({
  socketConnected,
  ws,
  chatId,
  userInfo,
}: BottomChatInputBarProps) => {
  const onSubmitChat = async (data: ChatSchemaType) => {
    if (socketConnected && userInfo) {
      const { message } = data;

      const wsSendData = JSON.stringify({
        sender: userInfo.nickName,
        senderImage: userInfo.profile,
        message,
        partyId: chatId,
        messageType: "SEND",
      });
      if (ws && ws instanceof WebSocket) {
        ws.send(wsSendData);
      }
    }
  };

  const UploaderUI = (props: RenderProps) => {
    const { handleClick } = props;
    return (
      <Box
        width="41px"
        height="41px"
        backgroundColor="white"
        style={{ borderRadius: "50%" }}
        centerContent
        onClick={handleClick}
      >
        <IconCamera />
      </Box>
    );
  };

  return (
    <Box height="68px" backgroundColor="violet100" centerContent>
      <Form
        onSubmit={onSubmitChat}
        resolver={zodResolver(chatSchema)}
        mode="onSubmit"
        id="chatForm"
      >
        <Flex gap="10px" alignItems="center">
          <Flex.Item flex="0 0 10%">
            <Form.ImageUploader
              name="imageFile"
              accept={ACCEPTED_IMAGE_TYPES.join(",")}
              render={props => <UploaderUI {...props} />}
            />
          </Flex.Item>
          <Flex.Item flex="0 0 70%">
            <Form.Input appearance="filled" type="text" name="message" />
          </Flex.Item>
          <Flex.Item flex="0 0 10%">
            <Button type="submit" form="chatForm">
              <Box
                width="41px"
                height="41px"
                backgroundColor="white"
                style={{ borderRadius: "50%" }}
                centerContent
              >
                <IconChevronLeftLarge />
              </Box>
            </Button>
          </Flex.Item>
        </Flex>
      </Form>
    </Box>
  );
};
export { BottomChatInputBar };
