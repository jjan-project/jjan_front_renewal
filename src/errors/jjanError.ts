import { ErrorOption } from "./interface";

export class jjanError extends Error {
  code: number;
  detailMessage: string | undefined;
  fixText: string | undefined;
  func: (() => void) | undefined;

  constructor({
    message,
    name,
    code,
    detailMessage,
    fixText,
    func,
  }: ErrorOption) {
    super(message);

    this.name = name;
    this.code = code;
    this.detailMessage = detailMessage;
    this.fixText = fixText;
    this.func = func;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, jjanError);
    } else {
      this.stack = new Error(message).stack;
    }
  }
}
