import { ReadonlyURLSearchParams } from "next/navigation";

export function transformStringLower(name: string) {
  return name.replace(/\s+/g, "-").toLowerCase();
}
export function transformStringUpper(name: string) {
  return name.replace(/-|_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function camelCase(name: string) {
  let ans = name.toLowerCase();
  return ans
    .split(" ")
    .reduce((s, c) => s + (c.charAt(0).toUpperCase() + c.slice(1)));
}

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

  return `${pathname}${queryString}`;
};
