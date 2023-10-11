import { z } from "zod";

import { jjanError } from "@/errors";

import { isNicknameExistedApi } from "@/services/internal/auth/http";

const isNicknameExists = async (nickname: string) => {
  try {
    const { code, message } = await isNicknameExistedApi(nickname);
    if (code === -1) {
      throw new jjanError({
        message,
        name: "닉네임 중복검사 에러",
        code,
      });
    }

    return true;
  } catch (e) {
    /**
     * @todo
     * 추후 에러 핸들링 수정
     */
    return false;
  }
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
