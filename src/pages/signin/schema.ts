import { z } from "zod";

const errorMessages = {
  required: "필수 항목입니다.",
  email: "유효하지 않은 이메일입니다.",
  passwordMinLength: "비밀번호는 최소 8자 이상이어야 합니다.",
  passwordMaxLength: "비밀번호는 최대 16자 이하여야 합니다.",
  passwordPattern: "비밀번호는 영문자, 숫자, 대문자 조합이어야 합니다.",
  confirmPasswordRequired: "비밀번호 확인을 입력해주세요.",
  confirmPasswordMatch: "비밀번호가 일치하지 않습니다.",
  existsEmail: "이미 존재하는 이메일입니다.",
};

const {
  required,
  email,
  passwordMinLength,
  passwordMaxLength,
  passwordPattern,
  confirmPasswordRequired,
  existsEmail,
} = errorMessages;

const signinSchema = z
  .object({
    email: z.string().min(1, { message: required }).email({ message: email }),
    password: z
      .string()
      .min(8, { message: passwordMinLength })
      .max(16, { message: passwordMaxLength })
      .regex(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,16}$/, {
        message: passwordPattern,
      }),

    confirmPassword: z.string().min(1, { message: confirmPasswordRequired }),
  })
  .refine(data => !isEmailExists(data.email), {
    path: ["email"],
    message: existsEmail,
  });

type SigninSchemaType = z.infer<typeof signinSchema>;

export type { SigninSchemaType };
export { signinSchema };

// 이메일 중복 검사 함수
function isEmailExists(email: string): boolean {
  console.info(email);
  // 서버에서 이메일 중복 여부를 검사하는 로직을 작성
  // 중복되는 이메일이 존재하면 true를 반환하고, 존재하지 않으면 false를 반환
  // 실제 서버 API 호출이나 데이터베이스 조회 등의 로직을 구현해야 합니다.
  // 여기에서는 예시로 항상 false를 반환하도록 설정했습니다.
  return false;
}
