"use client";

import { Box, Text, Title, Stack, Paper, Anchor } from "@mantine/core";
import Image from "next/image";

import { DividerGrid } from "./divider-grid";

interface ShowcaseCaseProps {
  category: string;
  title: string;
  description: string;
  links: { name: string; url: string }[];
  img: {
    src: string;
    alt: string;
  };
}

export const ShowcaseCard = ({
  category,
  title,
  description,
  links,
  img,
}: ShowcaseCaseProps) => {
  return (
    <Paper
      withBorder
      p="lg"
      radius="md"
      shadow="xs"
      pos="relative"
      style={{ overflow: "hidden" }}
      mih={300}
    >
      <DividerGrid
        vertical={10}
        horizontal={10}
        gap={64}
        top={0}
        left={0}
        opacity={0.5}
      />
      <Stack
        p="md"
        mr={{ base: 85, xs: 200, lg: 250 }}
        pos="relative"
        style={{ zIndex: 2 }}
      >
        <div>
          <Text size="sm" c="dimmed">
            {category.toUpperCase()}
          </Text>
          <Title order={3}>{title}</Title>
          <Text c="dimmed">{description}</Text>
        </div>
        <Stack gap={0}>
          {links.map((link) => (
            <Anchor
              href={link.url}
              key={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </Anchor>
          ))}
        </Stack>
      </Stack>
      <Box pos="absolute" w="100%" h="100%" top={0} left={0}>
        <Box pos="relative" w="100%" h="150%">
          <Box
            pos="absolute"
            w={{ base: 150, xs: 200, lg: 250 }}
            right={{ base: -30, xs: -50 }}
            mih={350}
            style={{
              transform: "rotate(10deg)",
            }}
          >
            <Image
              src={img.src}
              fill
              style={{
                objectFit: "contain",
              }}
              alt={img.alt}
            />
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};
