import { Flex, rem } from "@mantine/core";
import {
  IconArrowBigUp,
  IconArrowLeft,
  IconArrowUp,
} from "@tabler/icons-react";

import { baseKeyGap, KeyboardKey } from "./keyboard-key";
import classes from "./keyboard.module.css";

const letterKeys = ["Z", "X", "C", "V", "B", "N", "M"];

export const FourthRow = () => {
  return (
    <Flex gap={3 * baseKeyGap}>
      <Flex gap={baseKeyGap}>
        <KeyboardKey
          className={classes.blueKey}
          wRatio={2.25}
          element={
            <IconArrowBigUp
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
        <KeyboardKey className={classes.grayKey} text="," textTop="<" />
        <KeyboardKey className={classes.grayKey} text="." textTop=">" />
        <KeyboardKey className={classes.grayKey} text="/" textTop="?" />
        <KeyboardKey
          className={classes.blueKey}
          wRatio={2.95}
          element={
            <IconArrowBigUp
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          }
        />
      </Flex>
      <Flex gap={baseKeyGap}>
        <KeyboardKey opacity={0} />
        <KeyboardKey
          className={classes.purpleKey}
          align="center"
          justify="center"
          element={
            <IconArrowUp
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          }
        />

        <KeyboardKey opacity={0} />
      </Flex>
    </Flex>
  );
};
