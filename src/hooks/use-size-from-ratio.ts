import { useMemo } from "react";
import { MantineBreakpoint, rem } from "@mantine/core";

export function useSizeFromRatio(
  size: number | Partial<Record<"base" | MantineBreakpoint, number>>,
  ratio: number,
  useRemFallback?: boolean
): number | Partial<Record<"base" | MantineBreakpoint, number | string>> {
  return useMemo(() => {
    if (
      size === null ||
      size === undefined ||
      typeof size === "string" ||
      Array.isArray(size)
    ) {
      throw new Error("Width must be a number or an object");
    }

    if (typeof size === "number") {
      return size * ratio;
    }

    if (typeof size === "object") {
      const keys = Object.keys(size) as MantineBreakpoint[];

      if (!keys || keys.length === 0) {
        throw new Error("Width object must have keys");
      }

      const scaled: Partial<Record<MantineBreakpoint, number | string>> =
        keys.reduce(
          (
            acc: Partial<Record<MantineBreakpoint, number | string>>,
            key: MantineBreakpoint
          ) => {
            const value = size[key];
            if (value) {
              if (useRemFallback) {
                acc[key] = rem(value * ratio);
              } else {
                acc[key] = value * ratio;
              }
            }
            return acc;
          },
          {}
        );

      return scaled;
    }

    throw new Error("Width must be a number or an object");
  }, [size, ratio, useRemFallback]);
}
