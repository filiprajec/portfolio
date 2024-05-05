import { Flex, rem } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";

import { baseKeyGap, KeyboardKey } from "./keyboard-key";
import classes from "./keyboard.module.css";

export const FirstRow = () => {
  return (
    <Flex gap={3 * baseKeyGap}>
      <Flex gap={baseKeyGap}>
        <KeyboardKey className={classes.grayKey} text="" textTop="~" />
        <KeyboardKey className={classes.grayKey} text="1" textTop="!" />
        <KeyboardKey className={classes.grayKey} text="2" textTop="@" />
        <KeyboardKey className={classes.grayKey} text="3" textTop="#" />
        <KeyboardKey className={classes.grayKey} text="4" textTop="$" />
        <KeyboardKey className={classes.grayKey} text="5" textTop="%" />
        <KeyboardKey className={classes.grayKey} text="6" textTop="^" />
        <KeyboardKey className={classes.grayKey} text="7" textTop="&" />
        <KeyboardKey className={classes.grayKey} text="8" textTop="*" />
        <KeyboardKey className={classes.grayKey} text="9" textTop="(" />
        <KeyboardKey className={classes.grayKey} text="0" textTop=")" />
        <KeyboardKey className={classes.grayKey} text="-" textTop="_" />
        <KeyboardKey className={classes.grayKey} text="=" textTop="+" />
        <KeyboardKey
          className={classes.blueKey}
          wRatio={2}
          element={
            <IconArrowLeft
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          }
        />
      </Flex>
      <Flex gap={baseKeyGap}>
        <KeyboardKey className={classes.whiteKey} text="Insert" />
        <KeyboardKey className={classes.whiteKey} text="Home" />
        <KeyboardKey className={classes.whiteKey} text="PgUp" />
      </Flex>
    </Flex>
  );
};
