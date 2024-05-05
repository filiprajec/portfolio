import { MantineProvider } from "@mantine/core";

export const KeyboardThemeProvider = ({
  children,
  scale = 1,
}: {
  children: React.ReactNode;
  scale: number;
}) => {
  return (
    <MantineProvider
      theme={{ scale }}
      getRootElement={() => document.getElementById("keyboard") ?? undefined}
      cssVariablesSelector="#keyboard"
    >
      <div id="keyboard">{children}</div>
    </MantineProvider>
  );
};
