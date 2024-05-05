import { Box, BoxProps } from "@mantine/core";
import cls from "classnames";

export type DividerShapeType = "circle" | "square" | "diamond" | "plus";

interface DividerShapeProps
  extends Omit<BoxProps, "w" | "h" | "left" | "top" | "pos"> {
  shape: DividerShapeType;
  size: number;
}

export const DividerShape = ({
  shape,
  size,
  ...boxProps
}: DividerShapeProps) => {
  const props: BoxProps = {
    w: size,
    h: size,
    left: -size / 2,
    top: -size / 2,
    pos: "absolute",
    ...boxProps,
  } as const;

  switch (shape) {
    case "circle":
      return (
        <Box
          {...props}
          className={cls("divider-border")}
          style={{
            transform: "rotate(45deg)",
            borderRadius: "50%",
          }}
        />
      );
    case "square":
      return (
        <Box
          {...props}
          className={cls("divider-border")}
          style={{ borderRadius: 2 }}
        />
      );
    case "diamond":
      return (
        <Box
          {...props}
          className={cls("divider-border")}
          style={{
            transform: "rotate(45deg)",
            borderRadius: 2,
          }}
        />
      );
    case "plus":
      return (
        <>
          <Box
            {...props}
            w={0}
            left={0}
            className={cls("divider-border-right")}
          />
          <Box
            {...props}
            h={0}
            top={-1}
            className={cls("divider-border-bottom")}
          />
        </>
      );
    default:
      return null;
  }
};
