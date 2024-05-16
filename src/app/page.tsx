import { Divider } from "@mantine/core";

import {
  HighlightsSection,
  HeroSection,
  OutlineSection,
  Footer,
  ShowcaseSection,
} from "@/app/sections";
import { AboutMeSection } from "./sections/home/about-me-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OutlineSection />
      <Divider />
      <AboutMeSection />
      <Divider />
      <HighlightsSection />
      <Divider />
      <ShowcaseSection />
      <Footer />
    </main>
  );
}
