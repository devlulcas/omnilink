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
import { EmailInput } from "../components/EmailInput";
import { PasswordInput } from "../components/PasswordInput";
import NextLink from "next/link";

export default function SignUpPage() {
  return (
    <Center h="100vh">
      <Stack p={5} minWidth="30%" borderWidth={1} borderRadius="md">
        <Heading as="h1" mb={3}>
          Entre
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

        <Link as={NextLink} href="/signin">
          Já possuí uma conta? Crie uma aqui para entrar
        </Link>
      </Stack>
    </Center>
  );
}
