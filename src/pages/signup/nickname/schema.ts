import { z } from "zod";

/**
 * @todo
 * 닉네임 검사 api 구현 후 통합
 */

// import { isNicknameExists } from "@/api/jjan";

const errorMessages = {
  required: "필수 항목입니다.",
  existsNickname: "이미 존재하는 닉네임입니다.",
};

// const { required, existsNickname } = errorMessages;
const { required } = errorMessages;

const nicknameSchema = z.object({
  nickname: z.string().min(1, { message: required }),
});
// .refine(async data => await isNicknameExists(data.nickname), {
//   path: ["nickname"],
//   message: existsNickname,
// });

type NicknameSchemaType = z.infer<typeof nicknameSchema>;

export type { NicknameSchemaType };
export { nicknameSchema };
