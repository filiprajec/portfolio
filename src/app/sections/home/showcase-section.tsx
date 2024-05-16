"use client";

import { SectionLayout } from "@/components/section-layout";
import { SectionPadding } from "@/components/section-padding";
import { SectionTitle } from "@/components/section-title";
import { ShowcaseCards } from "@/components/showcase-cards";
import en from "@/lang/en.json";

export const ShowcaseSection = () => {
  const enShowcase = en.home.showcase;

  return (
    <SectionLayout leftBorder rightBorder rightShape="square">
      <SectionPadding pos="relative">
        <SectionTitle description={enShowcase.description}>
          {enShowcase.title}
        </SectionTitle>
        <ShowcaseCards items={enShowcase.items} />
      </SectionPadding>
    </SectionLayout>
  );
};
