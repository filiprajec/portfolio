"use client";

import { Box, Title, Text, Stack, Grid, GridCol } from "@mantine/core";

import { SectionLayout } from "@/components/section-layout";
import { DividerShape } from "@/components/divider-shape";
import { AboutMeTiles } from "@/components/about-me-tiles";
import { DividerGrid } from "@/components/divider-grid";
import { withFont } from "@/lang/with-font";
import en from "@/lang/en.json";

export const AboutMeSection = () => {
  const enAboutMe = en.home.aboutMe;

  return (
    <SectionLayout leftBorder leftShape="diamond">
      <Box p={{ base: "lg", xs: "xl" }} my={{ base: "sm", md: "lg" }}>
        <Title order={2} fz={{ base: 42, sm: 56 }}>
          {enAboutMe.title}
        </Title>
        <Grid>
          <GridCol span={{ base: 12, sm: 7 }} mt={{ base: "sm", sm: "xl" }}>
            <Stack>
              <Text size="lg" c="dimmed">
                {enAboutMe.first}
              </Text>
              <Text size="lg" c="dimmed">
                {enAboutMe.second}
              </Text>
              <Text
                size="xl"
                dangerouslySetInnerHTML={{ __html: withFont(enAboutMe.third) }}
              />
            </Stack>
          </GridCol>
          <GridCol
            offset={{ base: 0, sm: 1 }}
            span={{ base: 12, sm: 4 }}
            pos="relative"
            mt={{ base: "sm", sm: 0 }}
          >
            <Box py={40} pos="relative" px="md">
              <DividerGrid
                vertical={60}
                horizontal={30}
                gap={32}
                top={16}
                left={16}
                w="calc(100% - 32px)"
                h="calc(100% - 32px)"
              />
              <Box pos="absolute" right={0} top={0}>
                <DividerShape shape="square" size={30} />
              </Box>
              <Box pos="absolute" right={0} bottom={0}>
                <DividerShape shape="plus" size={30} />
              </Box>
              <AboutMeTiles />
            </Box>
          </GridCol>
        </Grid>
      </Box>
    </SectionLayout>
  );
};
