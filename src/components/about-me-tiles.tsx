"use client";

import { Box, Text, Stack, Paper, Group, Center } from "@mantine/core";
import cls from "classnames";

import { NoisePaper } from "@/components/noise-paper";
import { useScrollDistance } from "@/hooks/use-scroll-distance";
import en from "@/lang/en.json";
import classes from "./about-me-tiles.module.css";

interface AboutMeTileProps {
  label: string;
  emoji: string;
  title: string;
  subtitle: string;
}

export const AboutMeTile = ({
  label,
  emoji,
  title,
  subtitle,
}: AboutMeTileProps) => {
  const { ref, scrollDistance } = useScrollDistance();
  const scrollDistanceProgress = scrollDistance.progressToCenter;
  const scrollDistanceProgressInverse = 1 - scrollDistanceProgress;

  return (
    <Box ref={ref} pos="relative">
      <Box
        style={{
          transform: `rotate3d(1, 1, 1, ${Math.max(
            10 * scrollDistanceProgressInverse,
            0
          )}deg)`,
          willChange: "transform",
          transition: "transform 0.1s, margin-top 0.1s",
        }}
        pos="relative"
        mt={-50 + scrollDistanceProgress * 50}
      >
        <Paper
          w={38}
          h={38}
          withBorder
          radius="md"
          pos="absolute"
          right={20}
          top={-10}
          className={cls(classes["icon-shadow"], classes["icon-background"])}
          style={{
            zIndex: 1,
          }}
        >
          <Center w="100%" h="100%">
            <Text fz={24}>{emoji}</Text>
          </Center>
        </Paper>
        <NoisePaper
          p="sm"
          shadow="none"
          className={cls(classes["tile-shadow"], classes["tile-background"])}
          mt={10}
        >
          <Stack gap={8}>
            <Group gap="xs">
              <Text fw={600} size="sm" c="dimmed">
                {label}
              </Text>
            </Group>

            <Group gap="sm">
              <div>
                <Text lh={1.3}>{title}</Text>
                <Text size="sm" c="dimmed" lh={1.3}>
                  {subtitle}
                </Text>
              </div>
            </Group>
          </Stack>
        </NoisePaper>
      </Box>
    </Box>
  );
};

export const AboutMeTiles = () => {
  return (
    <Stack gap={0}>
      {en.home.aboutMe.tiles.map((data, index) => (
        <AboutMeTile key={index} {...data} />
      ))}
    </Stack>
  );
};
