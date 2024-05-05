import { Flex, rem } from "@mantine/core";
import { IconArrowBarLeft, IconArrowBarRight } from "@tabler/icons-react";

import { baseKeyGap, KeyboardKey } from "./keyboard-key";
import classes from "./keyboard.module.css";

const letterKeys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];

export const SecondRow = () => {
  return (
    <Flex gap={3 * baseKeyGap}>
      <Flex gap={baseKeyGap}>
        <KeyboardKey
          className={classes.blueKey}
          wRatio={1.5}
          elementTop={
            <IconArrowBarLeft
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          }
          element={
            <IconArrowBarRight
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          }
        />
        {letterKeys.map((letter) => (
          <KeyboardKey
            key={letter}
            className={classes.grayKey}
            text={letter}
            align="start"
            size="sm"
          />
        ))}
        <KeyboardKey className={classes.grayKey} text="[" textTop="{" />
        <KeyboardKey className={classes.grayKey} text="]" textTop="}" />
        <KeyboardKey
          className={classes.whiteKey}
          wRatio={1.5}
          text="\"
          textTop="|"
        />
      </Flex>
      <Flex gap={baseKeyGap}>
        <KeyboardKey className={classes.whiteKey} text="Delete" />
        <KeyboardKey className={classes.whiteKey} text="End" />
        <KeyboardKey className={classes.whiteKey} text="PgDn" />
      </Flex>
    </Flex>
  );
};
