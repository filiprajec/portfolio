import { Text } from "@mantine/core";

interface HeroInfoProps {
  label: string;
  value: string;
}

export const HeroInfo = ({ label, value }: HeroInfoProps) => {
  return (
    <div>
      <Text size="lg" fw={600}>
        {label}
      </Text>
      <Text>{value}</Text>
    </div>
  );
};
