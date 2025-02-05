import { join, resolve } from "node:path";

export const rootDir = resolve(import.meta.dirname, "..");

export function pathTo(...path: string[]): string {
  return join(rootDir, ...path);
}
