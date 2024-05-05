import {
  Title,
  Stack,
  Text,
  ThemeIcon,
  Group,
  Badge,
  SimpleGrid,
  StackProps,
  ThemeIconVariant,
} from "@mantine/core";
import {
  IconRectangularPrism,
  IconUserCircle,
  IconUsersGroup,
} from "@tabler/icons-react";

import classes from "./highlight.module.css";
import { usePrefersContrast } from "@/hooks/user-prefers-contrast";

interface HighlightTileProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  variant?: ThemeIconVariant;
  className?: string;
}

const HighlightTile = ({
  label,
  value,
  icon,
  variant = "default",
  className,
}: HighlightTileProps) => {
  return (
    <Group gap="sm">
      <ThemeIcon size="xl" radius="md" variant={variant} className={className}>
        {icon}
      </ThemeIcon>
      <div>
        <Text fw={800} lh={1.25}>
          {label}
        </Text>
        <Text c="dimmed" lh={1.25} fz={{ base: "md", sm: "sm" }}>
          {value}
        </Text>
      </div>
    </Group>
  );
};

export interface HighlightProps extends StackProps {
  name: string;
  role?: string;
  teamSize?: string;
  dayToDay?: string;
  description?: string;
  highlight: string;
  tags?: string[];
  color: string;
}

export const Highlight = ({
  name,
  role,
  teamSize,
  dayToDay,
  description,
  highlight,
  tags,
  color,
  ...stackProps
}: HighlightProps) => {
  const leftSectionHasContent = Boolean(role && teamSize && dayToDay);
  const prefersContrast = usePrefersContrast();

  return (
    <Stack gap={0} {...stackProps}>
      <Title order={2}>{name}</Title>
      <SimpleGrid
        cols={{ base: 1, sm: leftSectionHasContent ? 2 : 1 }}
        spacing={{ base: "md", sm: 32 }}
        mt={{ base: "md", sm: "xl" }}
      >
        {leftSectionHasContent && (
          <Stack>
            {role && (
              <HighlightTile
                label="Role"
                value={role}
                icon={<IconUserCircle stroke={1.25} />}
                className={classes["highlighted-icon"]}
              />
            )}
            {teamSize && (
              <HighlightTile
                label="Team size"
                value={teamSize}
                icon={<IconUsersGroup stroke={1.25} />}
              />
            )}
            {dayToDay && (
              <HighlightTile
                label="Day-to-Day"
                value={dayToDay}
                icon={<IconRectangularPrism stroke={1.25} />}
              />
            )}
          </Stack>
        )}

        <Stack gap={0}>
          <Stack gap={0}>
            {description && (
              <Text c="dimmed" mb={{ base: "sm", sm: "md" }}>
                {description}
              </Text>
            )}
            <Text>{highlight}</Text>
          </Stack>
          {tags && (
            <Group gap="xs" mt={{ base: "md", md: "lg" }}>
              {tags?.map((tag) => (
                <Badge
                  key={tag}
                  variant={prefersContrast ? "dot" : "light"}
                  color={color}
                >
                  {tag}
                </Badge>
              ))}
            </Group>
          )}
        </Stack>
      </SimpleGrid>
    </Stack>
  );
};
