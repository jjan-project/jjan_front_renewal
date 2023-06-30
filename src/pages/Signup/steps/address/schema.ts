import { z } from "zod";

const errorMessages = {
  unsupportFile: "지원하지 않는 파일 형식입니다.",
};

const { unsupportFile } = errorMessages;

const ACCEPTED_IMAGE_TYPES = ["image/png", "image/jpg"];

const AvatarSchema = z.object({
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

type AvatarSchemaType = z.infer<typeof AvatarSchema>;

export type { AvatarSchemaType };
export { AvatarSchema };
