type Response<T> = {
  statusCode: number;
  message: string;
} & T;

type ResponseWithToken<T> = Response<T> & {
  token: {
    accessToken: string;
    refreshToken: string;
  };
};

export type { Response, ResponseWithToken };
