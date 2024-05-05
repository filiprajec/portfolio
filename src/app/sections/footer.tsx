"use client";

import {
  ActionIcon,
  Box,
  Flex,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Anchor,
} from "@mantine/core";
import { IconBrandLinkedin, IconMail } from "@tabler/icons-react";

import { SectionLayout } from "@/components/section-layout";
import { KeyboardAnimation } from "@/components/keyboard-animation";

export const Footer = () => {
  return (
    <SectionLayout>
      <Box p={{ base: "lg", xs: "xl" }} my={{ base: "sm", md: "lg" }}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={40} h="100%">
          <Flex h="100%" align="flex-end">
            <Stack gap={24}>
              <KeyboardAnimation />
              <Box c="dimmed">
                <Text>
                  <span style={{ fontWeight: 600 }}>Toolbox •</span> Next.js,
                  Mantine UI, Tabler Icons & React Spring.
                </Text>
                <Text>
                  <span style={{ fontWeight: 600 }}>Fonts •</span> Karrik,
                  Basteleur, PicNic, Compagnon. Distributed by{" "}
                  <Anchor href="https://velvetyne.fr">Velvetyne</Anchor>
                </Text>
              </Box>
              <Stack gap={12}>
                <Group gap="sm">
                  <ActionIcon
                    size="xl"
                    radius="md"
                    variant="light"
                    aria-label="email"
                    color="gray"
                    onClick={() => window.open("mailto:filip@dingohead.com")}
                  >
                    <IconMail stroke={1.25} />
                  </ActionIcon>
                  <ActionIcon
                    size="xl"
                    radius="md"
                    variant="light"
                    color="gray"
                    aria-label="linkedin"
                    onClick={() =>
                      window.open("https://au.linkedin.com/in/filip-rajec")
                    }
                  >
                    <IconBrandLinkedin stroke={1.25} />
                  </ActionIcon>
                </Group>
              </Stack>
            </Stack>
          </Flex>
          <Flex
            h="100%"
            align="flex-end"
            justify={{ base: "flex-start", sm: "flex-end" }}
          >
            <Stack gap={8} align="end">
              <Text c="dimmed">I live & work on Wurundjeri land.</Text>
            </Stack>
          </Flex>
        </SimpleGrid>
      </Box>
    </SectionLayout>
  );
};
