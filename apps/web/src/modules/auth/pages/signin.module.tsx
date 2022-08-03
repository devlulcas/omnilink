import {
  Flex,
  Button,
  Center,
  Stack,
  Heading,
  Link,
  Divider,
} from "@chakra-ui/react";

import { FiSend } from "react-icons/fi";
import NextLink from "next/link";
import { EmailInput } from "../components/EmailInput";
import { PasswordInput } from "../components/PasswordInput";

export default function SignInPage() {
  return (
    <Center h="100vh">
      <Stack p={5} minWidth="30%" borderWidth={1} borderRadius="md">
        <Heading as="h1" mb={3}>
          Cadastre-se
        </Heading>

        <form>
          <Flex direction="column" gap={5}>
            <EmailInput />
            <PasswordInput />
            <Button type="submit" leftIcon={<FiSend />}>
              Enviar
            </Button>
          </Flex>
        </form>

        <Divider />

        <Link as={NextLink} href="/signup">
          Ainda não possuí uma conta? Crie uma aqui criar
        </Link>
      </Stack>
    </Center>
  );
}
