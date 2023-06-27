import type { RequestSubConfigMap } from "../type";

export function getRequestHeader(
  requestHeaderMap: RequestSubConfigMap,
  url: string,
  token?: string,
): Record<string, string> {
  const headerConfig = requestHeaderMap[url];
  if (typeof headerConfig === "function") {
    return headerConfig(token || "");
  }
  return headerConfig || {};
}

export function extractDomain(url: string): string {
  return new URL(url).hostname;
}
