import { generatePath } from "react-router-dom";

export const pathToUrl = (path: string, params: object) =>
  generatePath(path, params);
