import type { RequestSubConfigMap } from "../type";

export function getRequestHeader(
  requestHeaderMap: RequestSubConfigMap,
  url: string,
): Record<string, string> {
  return requestHeaderMap[url];
}

export function extractDomain(url: string): string {
  try {
    return new URL(url).hostname;
  } catch (error) {
    console.error("Invalid URL:", url);
    return "";
  }
}
