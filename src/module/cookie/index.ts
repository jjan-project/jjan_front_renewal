import { refreshTokenDefaultOptions } from "./config";
import UniversalCookieManager from "./implement/UniversalCookieManager";

const cookieManager = new UniversalCookieManager(refreshTokenDefaultOptions);

export { cookieManager };
