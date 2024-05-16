import { createTheme } from "@mantine/core";

import { karrik, jetBrainsMono, inter } from "./fonts";

export const theme = createTheme({
  white: "#f3f3f3",
  headings: {
    fontFamily: karrik.style.fontFamily,
  },
  primaryColor: "teal",
  scale: 1,
  fontSmoothing: false,
  fontFamilyMonospace: jetBrainsMono.style.fontFamily,
  fontFamily: inter.style.fontFamily,
});
