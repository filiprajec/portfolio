"use client";

import { Fragment } from "react";
import { Box, Stack, Divider, Grid, GridCol, BoxProps } from "@mantine/core";

import { DividerGrid } from "@/components/divider-grid";
import { DividerShape } from "@/components/divider-shape";
import { Highlight } from "@/components/highlight";
import { SectionLayout } from "@/components/section-layout";
import { SectionPadding } from "@/components/section-padding";
import { SectionTitle } from "@/components/section-title";
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
      <SectionPadding>
        <Grid>
          <GridCol span={{ base: 12, md: 4, lg: 3 }}>
            <Box pos="sticky" top={40}>
              <SectionTitle description={enExperience.description}>
                {enExperience.title}
              </SectionTitle>
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
      </SectionPadding>
    </SectionLayout>
  );
};
