/* eslint-disable @typescript-eslint/no-explicit-any */
interface CookieManager {
  get: (key: string, options?: any) => string | undefined;
  getAll: (options?: any) => { [name: string]: any };
  set: <T>(key: string, value: T, options?: any) => void;
  remove: (key: string, options?: any) => void;
  addChangeListener(callback: any): void;
  removeChangeListener(callback: any): void;
}

export default CookieManager;
