import { Divider } from "@mantine/core";

import {
  HighlightsSection,
  HeroSection,
  OutlineSection,
  Footer,
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
      <Divider mt="sm" />
      <Divider mt="sm" />
      <Footer />
    </main>
  );
}
