"use client";

import { Box } from "@mantine/core";
import { IconCloud } from "@tabler/icons-react";
import { animated, useSpring } from "@react-spring/web";

import { usePreferences } from "@/context/preferences-context";

const AnimatedBox = animated(Box);

interface CloudProps {
  duration?: number;
  translateY?: number;
  delay?: number;
}

export const Cloud = ({
  duration = 1000,
  translateY = 100,
  delay = 0,
}: CloudProps) => {
  const { reducedMotion } = usePreferences();
  const cloudPosition = useSpring({
    from: { y: 1, opacity: 0 },
    to: [
      { y: 0.75, opacity: 1 },
      { y: 0.5, opacity: 1 },
      { y: 0.25, opacity: 1 },
      { y: 0, opacity: 0 },
    ],
    loop: true,
    config: { duration, delay },
    pause: reducedMotion,
  });

  return (
    // @ts-ignore
    <AnimatedBox
      w={32}
      h={32}
      style={{
        transform: cloudPosition.y.to(
          (y) => `translateY(${-translateY / 2 + translateY * y}px)`
        ),
        opacity: cloudPosition.opacity,
      }}
    >
      <IconCloud stroke={1.5} />
    </AnimatedBox>
  );
};
