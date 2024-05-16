"use client";

import { SimpleGrid, Paper, Center } from "@mantine/core";

import { ShowcaseCard } from "@/components/showcase-card";

const EmptyShowcaseCard = () => {
  return (
    <Paper withBorder radius="md" visibleFrom="lg">
      <Center w="100%" h="100%">
        ...
      </Center>
    </Paper>
  );
};

export type ShowcaseItem = {
  category: string;
  title: string;
  description: string;
  links: { name: string; url: string }[];
  img: {
    src: string;
    alt: string;
  };
};

interface ShowcaseCardProps {
  items: ShowcaseItem[];
}

export const ShowcaseCards = ({ items }: ShowcaseCardProps) => {
  const showEmptyCard = items.length % 2 === 1;

  return (
    <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="lg" mt="xl">
      {items.map((item) => (
        <ShowcaseCard
          category={item.category}
          title={item.title}
          description={item.description}
          links={item.links}
          img={item.img}
          key={item.title}
        />
      ))}
      {showEmptyCard && <EmptyShowcaseCard />}
    </SimpleGrid>
  );
};
