"use client";

import { Box, MantineBreakpoint, MantineSize } from "@mantine/core";
import { useMounted } from "@mantine/hooks";
import { animated, useSpring } from "@react-spring/web";

import { usePreferences } from "@/context/preferences-context";
import { useSizeFromRatio } from "@/hooks/use-size-from-ratio";
import { Cone } from "@/components/cone";

const AnimatedCone = animated(Cone);

interface ConesProps {
  size?: Partial<Record<MantineBreakpoint, number>>;
}

type Size =
  | number
  | Partial<Record<"base" | MantineSize | (string & {}), string | number>>;

interface ConeSingle {
  wh: Size;
  top: Size;
  left: Size;
  layers: number;
  skewX: number;
  skewY: number;
  radius: string;
}

const ConeSingle = ({
  wh,
  top,
  left,
  layers,
  skewX,
  skewY,
  radius,
}: ConeSingle) => {
  const xSign = skewX > 0 ? 1 : -1;
  const ySign = skewY > 0 ? 1 : -1;
  const initialState = { x: skewX, y: skewY, layers };
  const { reducedMotion } = usePreferences();

  const [props, api] = useSpring(() => ({
    from: initialState,
    pause: reducedMotion,
  }));

  const onMouseEnter = () => {};
  const onMouseLeave = () => {
    if (reducedMotion) return;
    api.start({
      to: initialState,
    });
  };
  const onMouseMove = (event: React.MouseEvent) => {
    if (reducedMotion) return;
    const xPositionInElement = event.nativeEvent.offsetX;
    const yPositionInElement = event.nativeEvent.offsetY;
    api.start({
      x: (xPositionInElement / 200) * xSign,
      y: (yPositionInElement / 200) * ySign,
      layers,
    });
  };

  return (
    <Box
      pos="absolute"
      left={left}
      top={top}
      w={wh}
      h={wh}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    >
      <AnimatedCone
        layers={props.layers}
        skewX={props.x}
        skewY={props.y}
        layerRadius={radius}
        style={{ transition: "transform 0.01s" }}
      />
    </Box>
  );
};

export const Cones = ({ size = { base: 500 } }: ConesProps) => {
  useMounted();
  const skew = 0.75;
  const wh = useSizeFromRatio(size, 2 / 5);
  const offset = useSizeFromRatio(size, 3 / 5, true);

  return (
    <Box pos="relative" h={size} w={size}>
      <ConeSingle
        wh={wh}
        top={0}
        left={0}
        layers={100}
        skewX={skew}
        skewY={skew}
        radius="20%"
      />
      <ConeSingle
        wh={wh}
        top={offset}
        left={offset}
        layers={100}
        skewX={-skew}
        skewY={-skew}
        radius="50%"
      />
      <ConeSingle
        wh={wh}
        top={0}
        left={offset}
        layers={100}
        skewX={-skew}
        skewY={skew}
        radius="35%"
      />
      <ConeSingle
        wh={wh}
        top={offset}
        left={0}
        layers={100}
        skewX={skew}
        skewY={-skew}
        radius="35%"
      />
    </Box>
  );
};
