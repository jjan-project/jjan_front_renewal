import { rest } from "msw";

import { State } from "@/store/signupStore";

const fakeUsers = [
  {
    email: "test@example.com",
  },
];

export const handlers = [
  rest.get("https://api.example.com/users/:id", (req, res, ctx) => {
    const { id } = req.params;

    return res(
      ctx.status(200),
      ctx.json({
        id,
        name: "John Doe",
      }),
    );
  }),

  // 이메일 중복 검사
  rest.post("https://api.example.com/users/email-exists", (req, res, ctx) => {
    const { email } = req.body as { email: string };

    const emailExists = fakeUsers.some(user => user.email === email);

    if (emailExists) {
      return res(
        ctx.status(200),
        ctx.json({
          exists: true,
        }),
      );
    }

    return res(
      // 403 status를 반환할경우 test시 실제 에러가 발생함
      ctx.status(200),
      ctx.json({
        exists: false,
      }),
    );
  }),

  // 회원가입 요청
  rest.post("https://api.example.com/user/join", (req, res, ctx) => {
    const { email, password, nickname, location }: State = req.body as State;
    let responseData;

    if (email && password && nickname && location) {
      responseData = {
        item: email,
        target: "email",
        message: "OK",
      };
    } else {
      responseData = { message: "FORBIDDEN" };
    }

    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 액세스 토큰 및 리프레시토큰 인증
  rest.post("https://api.example.com/request", (req, res, ctx) => {
    let responseData;
    if (
      req.headers.get("Authorization")?.split(" ")[1] &&
      req.headers.get("Cookie")
    ) {
      responseData = { message: "Token is vaild" };
    } else {
      responseData = { message: "Token is invaild" };
    }

    return res(ctx.status(200), ctx.json(responseData));
  }),
];
