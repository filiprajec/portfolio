import { useMemo } from "react";
import { MantineBreakpoint, MantineSize, useMantineTheme } from "@mantine/core";

import postcssConfig from "../../postcss.config.cjs";

export function useSizes(
  width: Partial<Record<"base" | MantineBreakpoint, number>>
): string {
  const theme = useMantineTheme();

  return useMemo(() => {
    if (!width) {
      throw new Error("Width must be an object");
    }
    const keys = Object.keys(width) as MantineBreakpoint[];

    if (!keys || keys.length === 0) {
      throw new Error("Width object must have keys");
    }

    const breakpoints = postcssConfig.plugins["postcss-simple-vars"].variables;
    const maxSizes: Record<MantineBreakpoint, number | undefined> = {
      base: undefined,
      xs: undefined,
      sm: undefined,
      md: undefined,
      lg: undefined,
      xl: undefined,
    };

    keys.forEach((key) => {
      const w = width[key];
      if (w) {
        maxSizes[key] = w;
      }
    });

    const maxSizesDefined = Object.entries(maxSizes).filter(
      ([_, value]) => value !== undefined
    ) as [MantineBreakpoint, number][];

    const sizes = maxSizesDefined.map(([key, value], index) => {
      const isLastSize = index === maxSizesDefined.length - 1;
      const currentSizeValue = `${value * theme.scale}px`;

      if (isLastSize) {
        return currentSizeValue;
      }

      const nextSizeUp: MantineSize = maxSizesDefined[
        index + 1
      ][0] as MantineSize;
      if (!nextSizeUp) {
        throw new Error("Next size up not found");
      }
      const breakPointValue: string =
        breakpoints[`mantine-breakpoint-${nextSizeUp}`];

      if (!breakPointValue) {
        throw new Error("Breakpoint value not found");
      }

      return `(max-width: ${breakPointValue}) ${currentSizeValue}`;
    });

    return sizes.join(", ");
  }, [width, theme.scale]);
}
