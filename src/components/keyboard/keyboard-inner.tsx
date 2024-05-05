import { useLayoutEffect } from "react";
import { Flex, Paper, useMantineColorScheme } from "@mantine/core";

import { NoiseBackground } from "../noise-background";
import { baseKeyGap } from "./keyboard-key";
import { TopRow } from "./top-row";
import { FirstRow } from "./first-row";
import { SecondRow } from "./second-row";
import { ThirdRow } from "./third-row";
import { FourthRow } from "./fourth-row";
import { FifthRow } from "./fifth-row";
import classes from "./keyboard.module.css";

interface KeyboardInnerProps {
  colorScheme: "light" | "dark" | "auto";
}

export const KeyboardInner = ({ colorScheme }: KeyboardInnerProps) => {
  const { setColorScheme } = useMantineColorScheme();

  useLayoutEffect(() => {
    setColorScheme(colorScheme);
  }, [colorScheme]);

  return (
    <Paper
      p="xs"
      withBorder
      display="inline-flex"
      className={classes.keyboardCase}
      radius="md"
      pos="relative"
    >
      <NoiseBackground top={0} left={0} opacity={0.15} />
      <Flex direction="column" gap="lg" pos="relative">
        <TopRow />
        <Flex direction="column" gap={baseKeyGap}>
          <FirstRow />
          <SecondRow />
          <ThirdRow />
          <FourthRow />
          <FifthRow />
        </Flex>
      </Flex>
    </Paper>
  );
};
