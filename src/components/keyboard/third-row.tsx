import { Flex, rem } from "@mantine/core";
import { IconArrowBigDown, IconCornerDownLeft } from "@tabler/icons-react";

import { baseKeyGap, KeyboardKey } from "./keyboard-key";
import classes from "./keyboard.module.css";

const letterKeys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];

export const ThirdRow = () => {
  return (
    <Flex gap={baseKeyGap}>
      <KeyboardKey
        className={classes.blueKey}
        wRatio={1.75}
        element={
          <IconArrowBigDown
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
      <KeyboardKey className={classes.grayKey} text=";" textTop=":" />
      <KeyboardKey className={classes.grayKey} text="'" textTop={'"'} />
      <KeyboardKey
        className={classes.yellowKey}
        wRatio={2.35}
        element={
          <IconCornerDownLeft
            style={{ width: rem(18), height: rem(18) }}
            stroke={1.5}
          />
        }
      />
    </Flex>
  );
};
