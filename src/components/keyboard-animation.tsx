"use client";

import { Box, Group, Stack, rem } from "@mantine/core";
import { useMounted } from "@mantine/hooks";
import { IconParachute } from "@tabler/icons-react";
import { animated, useSpring } from "@react-spring/web";

import { usePreferences } from "@/context/preferences-context";
import { Keyboard } from "@/components/keyboard";
import { Cloud } from "@/components/cloud";

const AnimatedBox = animated(Box);

export const KeyboardAnimation = () => {
  useMounted();
  const { reducedMotion } = usePreferences();
  const keyboardProps = useSpring({
    from: { y: 0 },
    to: [{ y: 4 }, { y: 0 }, { y: -4 }, { y: 0 }],
    loop: true,
    config: {
      duration: 1000,
    },
    pause: reducedMotion,
  });

  return (
    <Stack gap={16}>
      <Group c="dimmed">
        <Cloud />
        <Box w={32} h={32} pos="relative">
          <IconParachute
            stroke={1.25}
            style={{ width: rem(24), height: rem(24) }}
          />
          <Box
            bg="var(--mantine-color-dimmed)"
            h={40}
            w={1.5}
            pos="absolute"
            top={24}
            left={11.5}
            style={{ borderRadius: 2 }}
          />
        </Box>
        <Cloud translateY={70} delay={500} duration={1300} />
      </Group>
      {/* @ts-ignore */}
      <AnimatedBox
        style={{
          transform: keyboardProps.y.to(
            (y) => `translateY(${y}px) rotate(${y / 8}deg)`
          ),
        }}
      >
        <Keyboard scale={0.4} />
      </AnimatedBox>
    </Stack>
  );
};
