import { z } from "zod";

import { ACCEPTED_IMAGE_TYPES } from "./constants";

const errorMessages = {
  partyNameMinLength: "모임 이름을 입력해주세요.",
  unsupportFile: "지원하지 않는 파일 형식입니다.",
  fileMaxLength: "이미지는 최대 10개까지 등록 가능합니다.",
  descriptionMinLength: "모임 설명을 입력해주세요.",
};

const { partyNameMinLength, unsupportFile, descriptionMinLength } =
  errorMessages;

const partyImageSchema = z.object({
  partyName: z.string().min(1, { message: partyNameMinLength }),
  photos: z.instanceof(Array<File>).refine(
    files => {
      return Array.from(files).every(file =>
        ACCEPTED_IMAGE_TYPES.includes(file.type),
      );
    },
    {
      message: unsupportFile,
    },
  ),
  // .refine(
  //   files => {
  //     return Array.from(files).length >= MAX_FILE_LENGTH;
  //   },
  //   {
  //     message: fileMaxLength,
  //   },
  // ),
  description: z.string().min(1, { message: descriptionMinLength }),
});

type PartyImageSchemaType = z.infer<typeof partyImageSchema>;

export type { PartyImageSchemaType };
export { partyImageSchema };
