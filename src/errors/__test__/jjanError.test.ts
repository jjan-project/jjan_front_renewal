import { jjanError } from "../jjanError"; // 적절한 경로로 수정해야합니다.

describe("jjanError", () => {
  it("should correctly assign properties", () => {
    const errorMessage = "This is a custom error";
    const errorName = "CustomError";
    const errorCode = 400;
    const errorDetailMessage = "This is a detailed message";
    const errorFixText = "This is a fix text";
    const errorFunc = () => console.info("Hello");

    const error = new jjanError({
      message: errorMessage,
      name: errorName,
      code: errorCode,
      detailMessage: errorDetailMessage,
      fixText: errorFixText,
      func: errorFunc,
    });

    expect(error.message).toEqual(errorMessage);
    expect(error.name).toEqual(errorName);
    expect(error.code).toEqual(errorCode);
    expect(error.detailMessage).toEqual(errorDetailMessage);
    expect(error.fixText).toEqual(errorFixText);
    expect(error.func).toEqual(errorFunc);
  });

  it("should have a stack trace", () => {
    const error = new jjanError({
      message: "Error message",
      name: "ErrorName",
      code: 500,
    });

    expect(error.stack).toBeDefined();
  });
});
