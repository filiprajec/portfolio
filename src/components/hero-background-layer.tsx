"use client";

import { Box } from "@mantine/core";
import { useMounted } from "@mantine/hooks";
import { animated, useSpring } from "@react-spring/web";

import { DividerGrid } from "@/components/divider-grid";
import { NoiseBackground } from "@/components/noise-background";
import { usePreferences } from "@/context/preferences-context";
import { Tunnel } from "@/components/tunnel";

const TunnelAnimated = animated(Tunnel);

export const HeroBackgroundLayer = () => {
  useMounted();
  const { reducedMotion } = usePreferences();
  const propsTunnel = useSpring({
    from: { x: 1, y: 0, z: 1, layers: 300 },
    to: [
      { x: 1, y: 0, z: 0, layers: 300 },
      { x: 0, y: 0, z: 1, layers: 300 },
      { x: 1, y: 0, z: 0, layers: 300 },
      { x: 1, y: 0, z: 1, layers: 300 },
    ],
    loop: {
      reverse: true,
    },
    config: {
      duration: 10000,
    },
    pause: reducedMotion,
  });

  return (
    <Box style={{ overflow: "hidden" }} w="100%" h="100%" pos="absolute">
      <Box
        w="100%"
        h="100%"
        pos="absolute"
        style={{
          overflow: "hidden",
          zIndex: -10,
        }}
      >
        <NoiseBackground opacity={0.2} />
      </Box>
      <DividerGrid
        vertical={60}
        horizontal={30}
        gap={32}
        style={{ zIndex: -4 }}
      />
      <Box
        pos="absolute"
        opacity={0.4}
        w="30%"
        h={100}
        bottom={0}
        style={{ zIndex: -4 }}
      >
        <TunnelAnimated
          rotateX={propsTunnel.x}
          rotateY={propsTunnel.y}
          rotateZ={propsTunnel.z}
          layers={propsTunnel.layers}
        />
      </Box>
    </Box>
  );
};
