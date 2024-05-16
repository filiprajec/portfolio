import { Box, BoxProps } from "@mantine/core";

interface SectionPaddingProps extends Omit<BoxProps, "p" | "my"> {
  children: React.ReactNode;
}

export const SectionPadding = ({
  children,
  ...boxProps
}: SectionPaddingProps) => {
  return (
    <Box
      {...boxProps}
      p={{ base: "lg", xs: "xl" }}
      my={{ base: "sm", md: "lg" }}
    >
      {children}
    </Box>
  );
};
