import { alpha, BackgroundImage, Box, Paper, PaperProps } from "@mantine/core";
import cls from "classnames";

import classes from "./noise-paper.module.css";

interface NoisePaperProps extends Omit<PaperProps, "pos" | "bg"> {
  children: React.ReactNode;
  style?: Omit<React.CSSProperties, "overflow">;
}

export const NoisePaper = ({ children, ...paperProps }: NoisePaperProps) => {
  const gradientColor = alpha("", 0.15);

  return (
    <Box pos="relative">
      <Paper
        p="md"
        withBorder
        radius="md"
        shadow="xs"
        {...paperProps}
        pos="relative"
        className={cls(classes.paper, paperProps.className)}
        style={{ ...paperProps.style, overflow: "hidden" }}
      >
        <BackgroundImage
          src="https://grainy-gradients.vercel.app/noise.svg"
          opacity={0.2}
          pos="absolute"
          w="100%"
          h="100%"
          top={0}
          left={0}
          style={{
            backgroundRepeat: "repeat",
            backgroundSize: "initial",
          }}
        />
        {children}
      </Paper>
    </Box>
  );
};
