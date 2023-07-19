import { z } from "zod";

import { ACCEPTED_IMAGE_TYPES } from "./constants";

const errorMessages = {
  unsupportFile: "지원하지 않는 파일 형식입니다.",
};

const { unsupportFile } = errorMessages;

const avatarSchema = z.object({
  avatar: z.instanceof(FileList).refine(
    files => {
      return Array.from(files).every(file =>
        ACCEPTED_IMAGE_TYPES.includes(file.type),
      );
    },
    {
      message: unsupportFile,
    },
  ),
});

type AvatarSchemaType = z.infer<typeof avatarSchema>;

export type { AvatarSchemaType };
export { avatarSchema };
