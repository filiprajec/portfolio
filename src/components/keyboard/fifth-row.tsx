import { Flex, rem } from "@mantine/core";

import { baseKeyGap, KeyboardKey } from "./keyboard-key";
import classes from "./keyboard.module.css";
import {
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconCommand,
} from "@tabler/icons-react";

const wRatioCommandKey = 1.35;

export const FifthRow = () => {
  return (
    <Flex gap={3 * baseKeyGap}>
      <Flex gap={baseKeyGap}>
        <KeyboardKey
          className={classes.purpleKey}
          text="Ctrl"
          wRatio={wRatioCommandKey}
        />
        <KeyboardKey
          className={classes.redKey}
          text="Option"
          wRatio={wRatioCommandKey}
        />
        <KeyboardKey
          className={classes.greenKey}
          text="Cmd"
          elementTop={
            <IconCommand
              style={{ width: rem(12), height: rem(12) }}
              stroke={1.5}
            />
          }
          wRatio={1.25}
        />
        <KeyboardKey className={classes.grayKey} wRatio={6.3} />
        <KeyboardKey
          className={classes.greenKey}
          text="Cmd"
          elementTop={
            <IconCommand
              style={{ width: rem(12), height: rem(12) }}
              stroke={1.5}
            />
          }
          wRatio={1.25}
        />
        <KeyboardKey
          className={classes.redKey}
          text="Option"
          wRatio={wRatioCommandKey}
        />
        <KeyboardKey
          className={classes.orangeKey}
          text="Alt"
          wRatio={wRatioCommandKey}
        />
        <KeyboardKey
          className={classes.purpleKey}
          text="Ctrl"
          wRatio={wRatioCommandKey}
        />
      </Flex>
      <Flex gap={baseKeyGap}>
        <KeyboardKey
          className={classes.purpleKey}
          align="center"
          justify="center"
          element={
            <IconArrowLeft
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          }
        />
        <KeyboardKey
          className={classes.purpleKey}
          align="center"
          justify="center"
          element={
            <IconArrowDown
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          }
        />

        <KeyboardKey
          className={classes.purpleKey}
          align="center"
          justify="center"
          element={
            <IconArrowRight
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          }
        />
      </Flex>
    </Flex>
  );
};
