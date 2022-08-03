import type { AppProps } from "next/app";
import { Center, ChakraProvider, localStorageManager } from "@chakra-ui/react";

import { defaultTheme } from "../styles/theme";
import { Header } from "../components/Header";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={defaultTheme} colorModeManager={localStorageManager}>
      <Center flexDirection="column" h="100vh">
        <Header />
        <Component {...pageProps} />
      </Center>
    </ChakraProvider>
  );
}

export default MyApp;
