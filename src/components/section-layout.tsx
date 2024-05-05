import {
  Box,
  BoxProps,
  Center,
  Divider,
  Flex,
  FlexProps,
  CenterProps,
} from "@mantine/core";

import { DividerShape, DividerShapeType } from "./divider-shape";
import cls from "classnames";

interface SectionLayoutProps extends FlexProps {
  children: React.ReactNode;
  contentBoxOuterProps?: Omit<CenterProps, "w" | "h" | "flex">;
  contentBoxProps?: Omit<BoxProps, "w" | "h" | "maw">;
  layoutBoxProps?: Omit<FlexProps, "flex" | "direction" | "pos">;
  layoutChildren?: React.ReactNode;
  layoutDivider?: boolean;
  leftBorder?: boolean;
  leftBoxProps?: Omit<BoxProps, "flex" | "visibleFrom">;
  leftChildren?: React.ReactNode;
  leftShape?: DividerShapeType | undefined;
  outerBoxChildren?: React.ReactNode;
  rightBorder?: boolean;
  rightBoxProps?: Omit<BoxProps, "flex" | "visibleFrom">;
  rightShape?: DividerShapeType | undefined;
}

export const SectionLayout = ({
  children,
  contentBoxOuterProps,
  contentBoxProps,
  layoutBoxProps,
  layoutChildren,
  layoutDivider,
  leftBorder,
  leftBoxProps,
  leftChildren,
  leftShape,
  outerBoxChildren,
  rightBorder,
  rightBoxProps,
  rightShape,
  ...boxProps
}: SectionLayoutProps) => {
  return (
    <Flex {...boxProps}>
      {outerBoxChildren}
      <Box
        {...leftBoxProps}
        className={cls(
          leftBorder && "divider-border-right",
          leftBoxProps?.className
        )}
        flex={{ base: 0, sm: 1 }}
        visibleFrom="sm"
      >
        {leftChildren}
      </Box>
      <Flex {...layoutBoxProps} flex={10} direction="column" pos="relative">
        {leftShape && <DividerShape shape={leftShape} size={24} />}
        {layoutChildren}
        <Flex h="100%">
          <Center w="100%" h="100%" flex={9} {...contentBoxOuterProps}>
            <Box w="100%" h="100%" maw={1200} {...contentBoxProps}>
              {children}
            </Box>
          </Center>
          <Box
            {...rightBoxProps}
            className={cls(
              rightBorder && "divider-border-left",
              rightBoxProps?.className
            )}
            flex={{ base: 0, sm: 1 }}
            visibleFrom="sm"
            pos="relative"
          >
            {rightShape && <DividerShape shape={rightShape} size={24} />}
          </Box>
        </Flex>
        {layoutDivider && <Divider w="100%" />}
      </Flex>
    </Flex>
  );
};
