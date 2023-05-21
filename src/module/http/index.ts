import AxiosHttpHandler from "./implement/AxiosHttpHandler";
import HttpHandler from "./interface/HttpHandler";

const httpService: HttpHandler = new AxiosHttpHandler();

export { httpService };
