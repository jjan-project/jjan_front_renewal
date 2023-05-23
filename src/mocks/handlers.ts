import { rest } from "msw";

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
];
