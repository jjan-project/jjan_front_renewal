import AxiosHttpHandler from "../http/implement/AxiosHttpHandler";

import { ApiService } from "./adapter/api";
import { ReactQueryManager } from "./implement/ReactQueryManager";

const axiosService = new AxiosHttpHandler();
const apiService = new ApiService(axiosService);
const serverStateManager = new ReactQueryManager(apiService);

export { serverStateManager };
