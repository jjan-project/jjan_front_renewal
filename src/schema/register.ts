import { z } from "zod";

const errorMessages = {
  required: "필수 항목입니다.",
  email: "유효하지 않은 이메일입니다.",
  passwordMinLength: "비밀번호는 최소 8자 이상이어야 합니다.",
  passwordMaxLength: "비밀번호는 최대 16자 이하여야 합니다.",
  passwordPattern: "비밀번호는 영문자, 숫자, 대문자 조합이어야 합니다.",
  confirmPasswordRequired: "비밀번호 확인을 입력해주세요.",
  confirmPasswordMatch: "비밀번호가 일치하지 않습니다.",
};

const {
  required,
  email,
  passwordMinLength,
  passwordMaxLength,
  passwordPattern,
  confirmPasswordRequired,
  confirmPasswordMatch,
} = errorMessages;

const signupSchema = z
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
  .refine(data => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: confirmPasswordMatch,
  });

type SignupSchemaType = z.infer<typeof signupSchema>;

export type { SignupSchemaType };
export { signupSchema };
