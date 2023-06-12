import { TIMES } from "../constant";

const refreshTokenDefaultOptions = {
  path: "/",
  maxAge: TIMES.ONE_WEEKEND,
  sameSite: false,
  secure: true,
};

export { refreshTokenDefaultOptions };
