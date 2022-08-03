import {
  HStack,
  Spacer,
  Button,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

export function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("whiteAlpha.500", "blackAlpha.500");

  return (
    <HStack w="100%" bg={bg} p={2}>
      <Center bg="green.700" color="green.50" p={2}>
        Logo
      </Center>
      <Spacer />
      <Button onClick={toggleColorMode}>
        {colorMode === "dark" ? "Dark" : "Light"}
      </Button>
    </HStack>
  );
}
