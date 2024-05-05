"use client";

import { useLayoutEffect, useState } from "react";
import {
  Switch,
  rem,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

export const ThemeSwitch = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("dark", {
    getInitialValueInEffect: false,
  });
  const [isChecked, setIsChecked] = useState(false);

  useLayoutEffect(() => {
    setIsChecked(computedColorScheme === "dark");
  }, [computedColorScheme]);

  const sunIcon = (
    <IconSun style={{ width: rem(16), height: rem(16) }} stroke={2.5} />
  );

  const moonIcon = (
    <IconMoonStars style={{ width: rem(16), height: rem(16) }} stroke={2.5} />
  );

  return (
    <Switch
      size="xl"
      color="dark.4"
      onLabel={sunIcon}
      offLabel={moonIcon}
      onChange={() =>
        setColorScheme(computedColorScheme === "dark" ? "light" : "dark")
      }
      checked={isChecked}
      aria-label="Toggle theme"
    />
  );
};
