import { State } from "@/store/signupStore";
import HttpHandler from "@/module/http/interface/HttpHandler";

export default class Register {
  private baseURL: string;
  private httpHandler: HttpHandler;

  constructor(baseURL: string, httpHandler: HttpHandler) {
    this.baseURL = baseURL;
    this.httpHandler = httpHandler;
  }

  async signUp(userData: State) {
    try {
      return await this.httpHandler.post(`${this.baseURL}/user/join`, userData);
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }
}
