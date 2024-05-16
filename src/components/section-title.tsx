import { Title, TitleProps, Text, Box } from "@mantine/core";

interface SectionTitleProps extends Omit<TitleProps, "order" | "fz" | "mb"> {
  children: string;
  description?: string;
}

export const SectionTitle = ({
  children,
  description,
  ...titleProps
}: SectionTitleProps) => {
  return (
    <Box>
      <Title
        {...titleProps}
        order={2}
        fz={{ base: 42, sm: 56 }}
        mb={{ base: "sm", sm: "xl" }}
      >
        {children}
      </Title>
      {description && (
        <Text maw={300} c="dimmed" size="lg">
          {description}
        </Text>
      )}
    </Box>
  );
};
