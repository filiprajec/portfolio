"use client";

import { Fragment } from "react";
import {
  Box,
  Title,
  Stack,
  Text,
  Divider,
  Grid,
  GridCol,
  BoxProps,
} from "@mantine/core";

import { SectionLayout } from "@/components/section-layout";
import { Highlight } from "@/components/highlight";
import { DividerShape } from "@/components/divider-shape";
import { DividerGrid } from "@/components/divider-grid";
import en from "@/lang/en.json";

export const HighlightDivider = (props: Omit<BoxProps, "pos">) => {
  return (
    <Box pos="relative" {...props}>
      <DividerShape shape="circle" size={20} />
      <Divider />
      <Box pos="absolute" right={0}>
        <Box pos="relative">
          <DividerShape shape="plus" size={20} />
        </Box>
      </Box>
    </Box>
  );
};

export const HighlightsSection = () => {
  const enExperience = en.home.experience;

  return (
    <SectionLayout
      rightShape="diamond"
      leftBorder
      leftChildren={
        <Box pos="relative" h="100%" w="100%">
          <Box pos="absolute" w="100%" h="100%">
            <DividerGrid vertical={60} horizontal={30} gap={32} />
          </Box>
        </Box>
      }
    >
      <Box p={{ base: "lg", xs: "xl" }} my={{ base: "sm", md: "lg" }}>
        <Grid>
          <GridCol span={{ base: 12, md: 4, lg: 3 }}>
            <Box pos="sticky" top={40}>
              <Title order={2} fz={{ base: 42, sm: 56 }}>
                {enExperience.title}
              </Title>
              <Text
                maw={300}
                mt={{ base: "sm", sm: "xl" }}
                c="dimmed"
                size="lg"
              >
                {enExperience.description}
              </Text>
            </Box>
          </GridCol>
          <GridCol
            span={{ base: 12, md: 7, lg: 8 }}
            offset={{ base: 0, md: 1 }}
            mt={{ base: "lg", md: "sm" }}
          >
            <Stack gap="xl">
              <HighlightDivider hiddenFrom="md" />
              {enExperience.data.map((experience, index) => {
                return (
                  <Fragment key={experience.name}>
                    <Highlight {...experience} />
                    {index !== enExperience.data.length - 1 && (
                      <HighlightDivider />
                    )}
                  </Fragment>
                );
              })}
            </Stack>
          </GridCol>
        </Grid>
      </Box>
    </SectionLayout>
  );
};
