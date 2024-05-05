import { Box, type MantineStyleProps } from "@mantine/core";
import cls from "classnames";

interface TunnelProps {
  layerBg?: MantineStyleProps["bg"];
  layerBorder?: boolean;
  layerClassName?: string;
  layerGap?: number;
  layerOpacity?: MantineStyleProps["opacity"];
  layers?: number;
  layerRadius?: React.CSSProperties["borderRadius"];
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
  layerStyle?: React.CSSProperties;
}

export const Tunnel = ({
  layerBg:
    bg = "linear-gradient(30deg, #ff1e00 0%, #ff9100 50%, #00ff15 60%, #6600ff 100%)",
  layerBorder,
  layerClassName,
  layers = 180,
  layerOpacity = 0.04,
  rotateX = 1,
  rotateY = 0,
  rotateZ = 1,
  layerRadius = "10%",
  layerGap = 1,
  layerStyle,
}: TunnelProps) => {
  return (
    <Box pos="relative" w="100%" h="100%">
      {Array.from({ length: layers }).map((_, i) => (
        <Box
          key={i}
          w="100%"
          h="100%"
          left={`calc(${i * layerGap}%)`}
          top={0}
          pos="absolute"
          opacity={layerOpacity}
          className={cls(
            layerBorder ? "border-light-dark" : undefined,
            layerClassName
          )}
          bg={bg}
          style={{
            ...layerStyle,
            borderRadius: layerRadius,
            transform: `rotate3d(${rotateX}, ${rotateY}, ${rotateZ}, ${i}deg)`,
          }}
        />
      ))}
    </Box>
  );
};
