import { useLayoutEffect, useState } from "react";
import {
  Box,
  BoxProps,
  Divider,
  Group,
  Stack,
  useMantineTheme,
} from "@mantine/core";
import { useElementSize } from "@mantine/hooks";

interface DividerGridProps extends Omit<BoxProps, "pos" | "ref"> {
  vertical: number;
  horizontal: number;
  fill?: boolean;
  gap: number;
}

export const DividerGrid = ({
  vertical,
  horizontal,
  fill = true,
  gap,
  ...boxProps
}: DividerGridProps) => {
  const { ref, width, height } = useElementSize();
  const { scale } = useMantineTheme();
  const [dividerCount, setDividerCount] = useState<{
    horizontal: number;
    vertical: number;
  }>({
    horizontal,
    vertical,
  });

  useLayoutEffect(() => {
    if (fill) {
      const dividerWidth = width / scale / gap;
      const dividerHeight = height / scale / gap;
      setDividerCount({
        horizontal: Math.floor(dividerWidth),
        vertical: Math.floor(dividerHeight),
      });
    }
  }, [width, height, gap, fill, scale]);

  return (
    <Box
      pos="absolute"
      w="100%"
      h="100%"
      {...boxProps}
      ref={ref}
      style={{ overflow: "hidden", ...boxProps?.style }}
    >
      <Box pos="absolute" w="100%" h="100%">
        <Stack gap={gap}>
          {new Array(dividerCount.vertical + 2).fill(0).map((_, i) => {
            if (i === 0 || i === dividerCount.vertical + 2) {
              return <Box key={i} />;
            }
            return <Divider key={i} />;
          })}
        </Stack>
      </Box>
      <Box pos="absolute" w="100%" h="100%">
        <Group gap={gap} h="100%">
          {new Array(dividerCount.horizontal + 2).fill(0).map((_, i) => {
            if (i === 0 || i === dividerCount.horizontal + 2) {
              return <Box key={i} />;
            }
            return <Box key={i} h="100%" className="divider-border-right" />;
          })}
        </Group>
      </Box>
    </Box>
  );
};
