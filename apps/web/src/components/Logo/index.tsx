import { Center, Circle, Text } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/system";

export function Logo() {
  const bg = useColorModeValue("whiteAlpha.500", "blackAlpha.500");

  return (
    <Center gap={2}>
      <Circle bg={bg} p={2}>
        🔗
      </Circle>
      <Text color="whiteAlpha.800" fontWeight={900}>
        Omnilink
      </Text>
    </Center>
  );
}
