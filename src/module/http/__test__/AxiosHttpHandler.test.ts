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

  test("request access token", async () => {
    const response = await axiosHttpHandler.post(
      `https://api.example.com/request`,
      {},
      {
        token: {
          accessToken: "123",
        },
      },
    );

    expect(response).toEqual({
      message: "Token is vaild",
    });
  });

  test("request not access token", async () => {
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
