import { Flex, Paper, Text, TextProps } from "@mantine/core";
import { NoiseBackground } from "../noise-background";

interface KeyboardKeyProps {
  align?: React.CSSProperties["alignItems"] | undefined;
  className?: string;
  element?: React.ReactElement;
  elementTop?: React.ReactElement;
  justify?: React.CSSProperties["justifyContent"] | undefined;
  text?: string;
  textTop?: string;
  wRatio?: number;
  size?: TextProps["fz"];
  opacity?: number;
}

export const baseKeySize = 36;
export const baseKeyGap = 4;

export const KeyboardKey = ({
  align = "center",
  className,
  element,
  elementTop,
  justify = "start",
  text,
  textTop,
  wRatio = 1,
  size = 10,
  opacity = 1,
}: KeyboardKeyProps) => {
  return (
    <Paper
      w={(baseKeySize + baseKeyGap) * wRatio}
      h={baseKeySize * 1.2}
      className={className}
      p={baseKeySize / 8}
      opacity={opacity}
      pos="relative"
      shadow="none"
      style={{
        overflow: "hidden",
      }}
    >
      <NoiseBackground top={0} left={0} opacity={0.1} />
      <Flex h="100%" w="100%" align={align} justify={justify} opacity={1}>
        <Flex direction="column">
          {textTop && (
            <Text fz={size} fw={500}>
              {textTop}
            </Text>
          )}
          {elementTop && elementTop}
          {text && (
            <Text fz={size} fw={500}>
              {text}
            </Text>
          )}
          {element && element}
        </Flex>
      </Flex>
    </Paper>
  );
};
