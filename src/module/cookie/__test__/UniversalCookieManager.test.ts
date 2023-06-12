import { CookieChangeOptions } from "universal-cookie/cjs/types";
import { describe, test, beforeEach, vi } from "vitest";

import UniversalCookieManager from "../implement/UniversalCookieManager";

const testData = {
  COOKIE_KEY: "test key",
  COOKIE_VALUE: "test value",
  COOKIE_KEY2: "test key second",
  COOKIE_VALUE2: "test value second",
};

const { COOKIE_KEY, COOKIE_VALUE, COOKIE_KEY2, COOKIE_VALUE2 } = testData;

describe("UniversalCookieManager", () => {
  let cookieManager: UniversalCookieManager;
  let callback: (options: CookieChangeOptions) => void;

  beforeEach(() => {
    cookieManager = new UniversalCookieManager();

    cookieManager.set(COOKIE_KEY, COOKIE_VALUE);
    cookieManager.set(COOKIE_KEY2, COOKIE_VALUE2);

    callback = vi.fn();

    cookieManager.addChangeListener(callback);
  });

  test("set으로 쿠키 설정 할수 있어야한다.", () => {
    expect(cookieManager).not.toBeUndefined();
  });

  test("get으로 쿠키를 가져올수 있어야한다.", () => {
    expect(cookieManager.get(COOKIE_KEY)).toBe(COOKIE_VALUE);
  });

  test("getAll으로 모든 쿠키를 가져올수 있어야한다.", () => {
    const allCookies = cookieManager.getAll();

    expect(allCookies).toEqual({
      [COOKIE_KEY]: COOKIE_VALUE,
      [COOKIE_KEY2]: COOKIE_VALUE2,
    });
  });

  test("remove로 쿠키를 삭제할수 있어야한다.", () => {
    cookieManager.remove(COOKIE_KEY);
    expect(cookieManager.get(COOKIE_KEY)).toBeUndefined();
  });

  test("addChangeListener로 쿠키 변경 리스너를 추가할 수 있어야 한다.", () => {
    cookieManager.set(COOKIE_KEY, COOKIE_VALUE);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test("removeChangeListener로 쿠키 변경 리스너를 제거할 수 있어야 한다.", () => {
    cookieManager.removeChangeListener(callback);
    cookieManager.set(COOKIE_KEY2, COOKIE_VALUE2);
    expect(callback).toHaveBeenCalledTimes(0);
  });
});
