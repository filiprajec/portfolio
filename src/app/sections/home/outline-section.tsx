"use client";

import { Box, Text, Flex } from "@mantine/core";

import { SectionLayout } from "@/components/section-layout";
import { SectionPadding } from "@/components/section-padding";
import en from "@/lang/en.json";

interface OutlineItemProps {
  title: string;
  description: string;
}

const OutlineItem = ({ title, description }: OutlineItemProps) => {
  return (
    <Box flex={1}>
      <div>
        <Text
          fw={500}
          w={{ base: 140, sm: 140 }}
          fz={{ base: 32, sm: 32 }}
          ff="heading"
        >
          {title}
        </Text>
        <Text size="lg">{description}</Text>
      </div>
    </Box>
  );
};

export const OutlineSection = () => {
  const enOutline = en.home.outline;

  return (
    <SectionLayout leftBorder rightBorder rightShape="square">
      <SectionPadding pos="relative">
        <Flex>
          {[enOutline.first, enOutline.second].map((item) => (
            <OutlineItem
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </Flex>
      </SectionPadding>
    </SectionLayout>
  );
};
