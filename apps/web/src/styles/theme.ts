import { extendTheme, Theme, withDefaultColorScheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: Partial<Theme> = {
  config: {
    initialColorMode: "system",
  },
  styles: {
    global: (props: any) => ({
      "html, body": {
        bgGradient: mode(
          ["linear(to-tr, gray.300, gray.500)"],
          ["linear(to-tr, gray.800, gray.800)"]
        )(props),
      },
      a: {
        color: props.colorMode === "dark" ? "teal.300" : "teal.500",
      },
    }),
  },
};

export const defaultTheme = extendTheme(
  withDefaultColorScheme({
    colorScheme: "gray",
  }),
  config
);
