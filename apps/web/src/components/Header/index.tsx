import { HStack, Spacer, Button, useColorModeValue } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { Logo } from "../Logo";

export function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("whiteAlpha.500", "blackAlpha.500");

  return (
    <HStack w="100%" bg={bg} p={2}>
      <Logo />

      <Spacer />

      <Button onClick={toggleColorMode}>
        {colorMode === "dark" ? "Dark" : "Light"}
      </Button>
    </HStack>
  );
}
