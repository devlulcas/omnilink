import { Center, Spacer, Stack, useColorModeValue } from "@chakra-ui/react";
import { FiCoffee } from "react-icons/fi";
import { ButtonLink } from "../components/ButtonLink";
import { LinkForm } from "../components/LinkForm";

export default function Start() {
  const bg = useColorModeValue("whiteAlpha.500", "blackAlpha.500");
  const color = useColorModeValue("gray.900", "gray.50");

  return (
    <Center h="100%" w="100%" p={3}>
      <Stack
        bg={bg}
        color={color}
        backdropBlur="2xl"
        borderRadius="md"
        shadow="md"
        h="100%"
        w="container.xl"
        p="1rem 2rem"
      >
        <ButtonLink href="/favorites">
          <FiCoffee />
          FAVORITOS
        </ButtonLink>

        <ButtonLink href="/secrets">
          <FiCoffee />
          SECRETOS
        </ButtonLink>

        <Spacer />

        <LinkForm onSubmit={(event) => event.preventDefault()} />

        <Spacer />

        <ButtonLink href="/dashboard">
          <FiCoffee />
          GERENCIAR LINKS
        </ButtonLink>
      </Stack>
    </Center>
  );
}
