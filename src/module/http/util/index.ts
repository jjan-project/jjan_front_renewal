import type { RequestSubConfigMap, RequestToken } from "../type";

export function getRequestHeader(
  requestHeaderMap: RequestSubConfigMap,
  url: string,
  token?: RequestToken,
): Record<string, string> {
  const headerConfig = requestHeaderMap[url];
  if (typeof headerConfig === "function") {
    if (token) return headerConfig(token || token);
    else return {};
  }
  return headerConfig || {};
}

export function extractDomain(url: string): string {
  return new URL(url).hostname;
}
