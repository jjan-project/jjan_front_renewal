import AxiosHttpHandler from "../http/implement/AxiosHttpHandler";

import { ApiService } from "./adapter/api";
import { ReactQueryManager } from "./implement/ReactQueryManager";

const axiosService = new AxiosHttpHandler();

const apiService = new ApiService(axiosService, { withCredentials: true });
const serverStateManager = new ReactQueryManager(apiService);

const apiServiceExternal = new ApiService(axiosService);
const serverStateManagerExternal = new ReactQueryManager(apiServiceExternal);

export { serverStateManager, serverStateManagerExternal };
