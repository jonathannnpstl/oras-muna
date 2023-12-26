import { ReadonlyURLSearchParams } from "next/navigation";

export function transformStringLower(name: string) {
  return name.replace(/\s+/g, "-").toLowerCase();
}
export function transformStringUpper(name: string) {
  return name.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

  return `${pathname}${queryString}`;
};
