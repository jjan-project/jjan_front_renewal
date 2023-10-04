import { z } from "zod";

import { ACCEPTED_IMAGE_TYPES } from "./constants";

const errorMessages = {
  unsupportFile: "지원하지 않는 파일 형식입니다.",
  messageRequired: "메시지는 1글자 이상이어야 합니다.",
};

const { unsupportFile, messageRequired } = errorMessages;

const chatSchema = z
  .object({
    imageFile: z.array(z.union([z.instanceof(File), z.undefined()])),
    message: z.string().optional(),
  })
  .refine(
    data => {
      return data.imageFile.every(file =>
        file ? ACCEPTED_IMAGE_TYPES.includes(file.type) : true,
      );
    },
    {
      message: unsupportFile,
      path: ["imageFile"],
    },
  )
  .refine(
    data => {
      const isEmptyMessage = !data.message || data.message.trim().length === 0;

      if (data.imageFile.every(file => !file) && isEmptyMessage) {
        return false;
      }

      return true;
    },
    {
      message: messageRequired,
      path: ["message"],
    },
  );

type ChatSchemaType = z.infer<typeof chatSchema>;

export type { ChatSchemaType };
export { chatSchema };
