import { z } from "zod";

import { ACCEPTED_IMAGE_TYPES } from "./constants";

const errorMessages = {
  unsupportFile: "지원하지 않는 파일 형식입니다.",
  required: "필수 항목입니다.",
};

const { unsupportFile, required } = errorMessages;

const profileEditSchema = z.object({
  avatar: z.instanceof(Array<File>).refine(
    files => {
      return Array.from(files).every(file =>
        ACCEPTED_IMAGE_TYPES.includes(file.type),
      );
    },
    {
      message: unsupportFile,
    },
  ),
  nickname: z.string().min(1, { message: required }),
});

type ProfileEditSchemaType = z.infer<typeof profileEditSchema>;

export type { ProfileEditSchemaType };
export { profileEditSchema };
