import { z } from "zod";

import { jjanError } from "@/errors";

import { isNicknameExistedApi } from "@/api/jjan/joinController";

const isNicknameExists = async (nickname: string) => {
  try {
    const { code } = await isNicknameExistedApi(nickname);
    if (code === 1) return true;
  } catch (e) {
    throw new jjanError({
      message: "이메일 중복검사 에러가 발생했습니다.",
      name: "이메일 중복검사 에러",
      code: -1,
    });
  }
  return false;
};

const errorMessages = {
  required: "필수 항목입니다.",
  existsNickname: "이미 존재하는 닉네임입니다.",
};

const { required, existsNickname } = errorMessages;

const nicknameSchema = z
  .object({
    nickname: z.string().min(1, { message: required }),
  })
  .refine(data => isNicknameExists(data.nickname), {
    path: ["nickname"],
    message: existsNickname,
  });

type NicknameSchemaType = z.infer<typeof nicknameSchema>;

export type { NicknameSchemaType };
export { nicknameSchema };
