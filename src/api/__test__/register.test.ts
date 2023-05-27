import { describe, expect, test } from "vitest";

import Register from "../register";
import AxiosHttpHandler from "@/module/http/implement/AxiosHttpHandler";

describe("Register 검사", () => {
  const httpHandler = new AxiosHttpHandler();
  const baseURL = "https://api.example.com";

  const register = new Register(baseURL, httpHandler);

  test("회원가입시 필수정보가 모두 존재하는 경우", async () => {
    const userData = {
      email: "user@example.com",
      password: "password123",
      nickname: "John",
      location: "Seoul",
      birthday: "",
      avatar: "",
      gender: "",
      capacity: "",
    };

    const response = (await register.signUp(userData)) as { message: string };
    expect(response?.message).toEqual("OK");
  });

  test("회원가입시 필수정보가 없는 경우", async () => {
    const userData = {
      email: "user@example.com",
      password: "",
      nickname: "John",
      location: "Seoul",
      birthday: "",
      avatar: "",
      gender: "",
      capacity: "",
    };

    const response = (await register.signUp(userData)) as { message: string };
    expect(response?.message).toEqual("FORBIDDEN");
  });
});
