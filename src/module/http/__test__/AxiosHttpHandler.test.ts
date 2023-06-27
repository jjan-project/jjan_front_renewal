import { describe, expect, test } from "vitest";

import AxiosHttpHandler from "../implement/AxiosHttpHandler";

describe("AxiosHttpHandler", () => {
  const url = "https://api.example.com";
  const axiosHttpHandler = new AxiosHttpHandler();

  test("GET request", async () => {
    const userId = "1";
    const response = await axiosHttpHandler.get(`${url}/users/${userId}`);

    expect(response).toEqual({
      id: userId,
      name: "John Doe",
    });
  });

  test("사용자 인증이 필요한 API요청시 토큰을 삽입했을떄", async () => {
    const response = await axiosHttpHandler.post(
      `https://api.example.com/request`,
      {},
      {
        token: {
          accessToken: "123",
          refreshToken: "456",
        },
      },
    );

    expect(response).toEqual({
      message: "Token is vaild",
    });
  });

  test("사용자 인증이 필요한 API요청시 토큰을 안 넣었을떄", async () => {
    const response = await axiosHttpHandler.post(
      `https://api.example.com/request`,
      {},
      { timeout: 1000 },
    );

    expect(response).toEqual({
      message: "Token is invaild",
    });
  });
});
