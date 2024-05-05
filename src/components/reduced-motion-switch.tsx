"use client";

import { Switch, rem } from "@mantine/core";
import { IconBounceRight, IconSpiralOff } from "@tabler/icons-react";

import { usePreferences } from "@/context/preferences-context";

export const ReducedMotionSwitch = () => {
  const { reducedMotion, setReducedMotion } = usePreferences();

  const offIcon = (
    <IconSpiralOff style={{ width: rem(16), height: rem(16) }} stroke={2.5} />
  );

  const onIcon = (
    <IconBounceRight style={{ width: rem(16), height: rem(16) }} stroke={2.5} />
  );

  return (
    <Switch
      size="xl"
      color="dark.4"
      onLabel={onIcon}
      offLabel={offIcon}
      onChange={() => setReducedMotion(!reducedMotion)}
      checked={reducedMotion}
      aria-label="Toggle motion"
    />
  );
};
