"use client";
import { useComputedColorScheme } from "@mantine/core";

import { KeyboardThemeProvider } from "./keyboard-theme-provider";
import { KeyboardInner } from "./keyboard-inner";

interface KeyboardProps {
  scale: number;
}

export const Keyboard = ({ scale }: KeyboardProps) => {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <KeyboardThemeProvider scale={scale}>
      <KeyboardInner colorScheme={computedColorScheme} />
    </KeyboardThemeProvider>
  );
};
