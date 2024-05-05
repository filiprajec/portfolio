import { Flex } from "@mantine/core";

import { KeyboardKey, baseKeySize, baseKeyGap } from "./keyboard-key";
import classes from "./keyboard.module.css";

export const TopRow = () => {
  return (
    <Flex gap={3 * baseKeyGap}>
      <Flex gap={baseKeySize + 3 * baseKeyGap}>
        <KeyboardKey className={classes.yellowKey} text="Esc" />
        <Flex gap={(baseKeySize + 3 * baseKeyGap) / 2}>
          <Flex gap={baseKeyGap}>
            <KeyboardKey className={classes.whiteKey} text="F1" />
            <KeyboardKey className={classes.whiteKey} text="F2" />
            <KeyboardKey className={classes.whiteKey} text="F3" />
            <KeyboardKey className={classes.whiteKey} text="F4" />
          </Flex>
          <Flex gap={baseKeyGap}>
            <KeyboardKey className={classes.blueKey} text="F5" />
            <KeyboardKey className={classes.blueKey} text="F6" />
            <KeyboardKey className={classes.blueKey} text="F7" />
            <KeyboardKey className={classes.blueKey} text="F8" />
          </Flex>
          <Flex gap={baseKeyGap}>
            <KeyboardKey className={classes.whiteKey} text="F9" />
            <KeyboardKey className={classes.whiteKey} text="F10" />
            <KeyboardKey className={classes.whiteKey} text="F11" />
            <KeyboardKey className={classes.whiteKey} text="F12" />
          </Flex>
        </Flex>
      </Flex>
      <Flex gap={baseKeyGap}>
        <KeyboardKey className={classes.blueKey} text="Sysrq" textTop="PrtSc" />
        <KeyboardKey className={classes.blueKey} text="Lock" textTop="ScrLK" />
        <KeyboardKey className={classes.blueKey} text="Break" textTop="Pause" />
      </Flex>
    </Flex>
  );
};
