import { describe, it, expect } from "vitest";

import { signupSchema } from "../register";

import AxiosHttpHandler from "@/module/http/implement/AxiosHttpHandler";

const testData = {
  validEmail: "test@example.com",
  validPassword: "Test1234!",
  invalidEmail: "invalidemail",
  invalidPassword: "Test12345678",
  mismatchedPassword: "Test1234!@",
  emptyString: "",
};

describe("회원가입 스키마", () => {
  const url = "https://api.example.com";
  const axiosHttpHandler = new AxiosHttpHandler();

  it("유효한 데이터로 통과해야 함", () => {
    const validData = {
      email: testData.validEmail,
      password: testData.validPassword,
      confirmPassword: testData.validPassword,
    };

    const validationResult = signupSchema.safeParse(validData);
    expect(validationResult.success).toBe(true);
  });

  it("필수 필드 누락 시 실패해야 함", () => {
    const invalidData = {
      email: testData.emptyString,
      password: testData.emptyString,
      confirmPassword: testData.emptyString,
    };

    const validationResult = signupSchema.safeParse(invalidData);
    expect(validationResult.success).toBe(false);
  });

  it("유효하지 않은 이메일일 때 실패해야 함", () => {
    const invalidData = {
      email: testData.invalidEmail,
      password: testData.validPassword,
      confirmPassword: testData.validPassword,
    };

    const validationResult = signupSchema.safeParse(invalidData);
    expect(validationResult.success).toBe(false);
  });

  it("유효하지 않은 비밀번호일 때 실패해야 함", () => {
    const invalidData = {
      email: testData.validEmail,
      password: testData.invalidPassword,
      confirmPassword: testData.invalidPassword,
    };

    const validationResult = signupSchema.safeParse(invalidData);
    expect(validationResult.success).toBe(false);
  });

  it("비밀번호가 서로 다를때 실패해야 함", () => {
    const invalidData = {
      email: testData.validEmail,
      password: testData.validPassword,
      confirmPassword: testData.mismatchedPassword,
    };

    const validationResult = signupSchema.safeParse(invalidData);
    expect(validationResult.success).toBe(false);
  });

  it("이메일 중복 검사 이메일이 이미 존재할때", async () => {
    const email = testData.validEmail;
    const response = await axiosHttpHandler.post(`${url}/users/email-exists`, {
      email,
    });
    expect(response).toEqual({
      exists: true,
    });
  });

  it("이메일 중복 검사 이메일이 존재하지 않을때", async () => {
    const email = testData.invalidEmail;
    const response = await axiosHttpHandler.post(`${url}/users/email-exists`, {
      email,
    });
    expect(response).toEqual({
      exists: false,
    });
  });
});
