import { Box, type MantineStyleProps } from "@mantine/core";
import cls from "classnames";

interface ConeProps {
  layerBg?: MantineStyleProps["bg"];
  layerBorder?: boolean;
  layerClassName?: string;
  layerGap?: number;
  layerOpacity?: MantineStyleProps["opacity"];
  layerRadius?: React.CSSProperties["borderRadius"];
  layers?: number;
  layerStyle?: React.CSSProperties;
  skewX?: number;
  skewY?: number;
}

export const Cone = ({
  layerBg,
  layerBorder = true,
  layerClassName,
  layerGap = 1,
  layerOpacity = 0.3,
  layerRadius = "50%",
  layers = 100,
  layerStyle,
  skewX = 1,
  skewY = 1,
}: ConeProps) => {
  return (
    <Box pos="relative" w="100%" h="100%">
      {Array.from({ length: layers }).map((_, i) => (
        <Box
          key={i}
          w={`calc(${100 - layerGap * i}%)`}
          h={`calc(${100 - layerGap * i}%)`}
          left={`calc(${layerGap * i * (skewX + 0.5)}%)`}
          top={`calc(${layerGap * i * (skewY + 0.5)}%)`}
          pos="absolute"
          className={cls(
            layerBorder ? "border-light-dark" : undefined,
            layerClassName
          )}
          opacity={layerOpacity}
          style={{
            ...layerStyle,
            borderRadius: layerRadius,
          }}
          bg={layerBg}
        />
      ))}
    </Box>
  );
};
