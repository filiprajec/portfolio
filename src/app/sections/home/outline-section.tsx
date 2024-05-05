"use client";

import { Box, Text, Flex } from "@mantine/core";

import { SectionLayout } from "@/components/section-layout";
import en from "@/lang/en.json";

export const OutlineSection = () => {
  const enOutline = en.home.outline;

  return (
    <SectionLayout leftBorder rightBorder rightShape="square">
      <Box
        p={{ base: "lg", xs: "xl" }}
        my={{ base: "sm", md: "lg" }}
        pos="relative"
      >
        <Flex>
          <Box flex={1}>
            <div>
              <Text
                fw={500}
                w={{ base: 140, sm: 140 }}
                fz={{ base: 32, sm: 32 }}
                ff="heading"
              >
                {enOutline.first.title}
              </Text>
              <Text size="lg">{enOutline.first.description}</Text>
            </div>
          </Box>
          <Box flex={1}>
            <Box>
              <Text
                fw={500}
                w={{ base: 140, sm: 140 }}
                fz={{ base: 32, sm: 32 }}
                ff="heading"
              >
                {enOutline.second.title}
              </Text>
              <Text size="lg">{enOutline.second.description}</Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </SectionLayout>
  );
};
