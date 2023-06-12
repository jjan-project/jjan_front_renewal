import Cookies from "universal-cookie";
import {
  CookieGetOptions,
  CookieSetOptions,
  CookieChangeOptions,
} from "universal-cookie/cjs/types";

import CookieManager from "../interface/CookieManager";

class UniversalCookieManager implements CookieManager {
  private cookies: Cookies;
  private defaultOptions?: CookieSetOptions;

  constructor(defaultOptions?: CookieSetOptions) {
    this.cookies = new Cookies();
    this.defaultOptions = defaultOptions;
  }

  get(key: string, options?: CookieGetOptions): string | undefined {
    return this.cookies.get(key, options);
  }

  getAll(options?: CookieGetOptions) {
    return this.cookies.getAll(options);
  }

  set<T>(key: string, value: T, options?: CookieSetOptions) {
    this.cookies.set(key, value, { ...this.defaultOptions, ...options });
  }

  remove(key: string, options?: CookieSetOptions) {
    this.cookies.remove(key, { ...this.defaultOptions, ...options });
  }

  addChangeListener(callback: (options: CookieChangeOptions) => void): void {
    this.cookies.addChangeListener(callback);
  }

  removeChangeListener(callback: (options: CookieChangeOptions) => void): void {
    this.cookies.removeChangeListener(callback);
  }
}

export default UniversalCookieManager;
