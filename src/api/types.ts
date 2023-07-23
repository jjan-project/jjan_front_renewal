type Response<T> = {
  code: number;
  message: string;
  data: T;
};

type ResponseWithToken<T> = Response<T> & {
  token: {
    accessToken: string;
    refreshToken: string;
  };
};

export type { Response, ResponseWithToken };
