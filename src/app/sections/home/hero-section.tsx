"use client";

import { Fragment } from "react";
import { Box, Title, Flex, Group, Stack } from "@mantine/core";

import { Cones } from "@/components/cones";
import { HeroBackgroundLayer } from "@/components/hero-background-layer";
import { HeroInfo } from "@/components/hero-info";
import { ProfileImage } from "@/components/profile-image";
import { SectionLayout } from "@/components/section-layout";
import en from "@/lang/en.json";

export const HeroSection = () => {
  const enHero = en.home.hero;

  return (
    <SectionLayout
      pos="relative"
      leftBorder
      layoutDivider
      contentBoxProps={{ pos: "relative" }}
      layoutChildren={<HeroBackgroundLayer />}
      pt="env(safe-area-inset-top)"
    >
      <Box pos="absolute" w="100%" h="100%">
        <Box pos="absolute" right={0} bottom={0}>
          <ProfileImage w={{ base: 200, xs: 240, sm: 270, md: 270, lg: 300 }} />
        </Box>
      </Box>

      <Flex
        align="end"
        justify="space-between"
        pos="relative"
        h="100%"
        w="100%"
        p="lg"
        style={{ zIndex: 10 }}
        pt={64}
      >
        <Stack gap="xl" mb="xl" w="100%">
          <Flex justify={{ base: "center", sm: "start" }} w="100%">
            <Cones size={{ base: 320, xs: 500 }} />
          </Flex>
          <Box pos="relative">
            <Title order={2} fz={{ base: 38, sm: 64 }}>
              {enHero.greeting}
            </Title>
            <Title
              order={1}
              fz={{ base: 96, sm: 158 }}
              lh={0.9}
              display="table-caption"
            >
              {enHero.greetingName}
            </Title>
          </Box>
          <Group gap="xl" maw={{ base: 300, sm: 500, md: "100%" }}>
            {enHero.info.map((info) => (
              <Fragment key={info.label}>
                <HeroInfo {...info} />
              </Fragment>
            ))}
          </Group>
        </Stack>
      </Flex>
    </SectionLayout>
  );
};
