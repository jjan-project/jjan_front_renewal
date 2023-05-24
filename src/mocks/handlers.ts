import { rest } from "msw";

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

  // rest.post
  // more..

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
];
