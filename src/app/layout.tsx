import "@mantine/core/styles.css";
import "./theme.css";

import {
  ColorSchemeScript,
  Flex,
  MantineProvider,
  AppShell,
  AppShellHeader,
  AppShellMain,
  Group,
} from "@mantine/core";
import type { Viewport } from "next";

import { ThemeSwitch } from "@/components/theme-switch";
import { PreferencesProvider } from "@/context/preferences-context";
import { ReducedMotionSwitch } from "@/components/reduced-motion-switch";
import { theme } from "./theme";

export const viewport: Viewport = {};

export const metadata = {
  title: "Filip Rajec",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <PreferencesProvider>
            <AppShell
              transitionDuration={500}
              transitionTimingFunction="ease"
              style={{
                overflow: "hidden",
              }}
            >
              <AppShellHeader
                withBorder={false}
                px="md"
                py="xs"
                bg="transparent"
              >
                <Flex align="center" justify="flex-end" h="100%">
                  <Group gap="xs">
                    <ReducedMotionSwitch />
                    <ThemeSwitch />
                  </Group>
                </Flex>
              </AppShellHeader>
              <AppShellMain>{children}</AppShellMain>
            </AppShell>
          </PreferencesProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
