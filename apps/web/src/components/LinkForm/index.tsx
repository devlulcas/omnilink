import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Textarea,
} from "@chakra-ui/react";
import { HTMLAttributes } from "react";
import { FiCoffee } from "react-icons/fi";
import { TagInput } from "../TagInput";

interface LinkFormProps extends HTMLAttributes<HTMLFormElement> {}

export function LinkForm(props: LinkFormProps) {
  return (
    <form {...props}>
      <Center flexDirection="column" gap={3}>
        <Flex direction="column" gap={5} w="90%">
          <FormControl>
            <FormLabel>URL</FormLabel>
            <InputGroup>
              <InputLeftAddon>http://</InputLeftAddon>
              <Input
                variant="filled"
                bg="whiteAlpha.400"
                type="url"
                name="url"
              />
              <InputRightAddon>.com</InputRightAddon>
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Nome</FormLabel>
            <Input variant="filled" bg="whiteAlpha.400" name="name" />
          </FormControl>

          <FormControl>
            <FormLabel>Descrição</FormLabel>
            <Textarea resize="none" name="description" />
          </FormControl>

          <TagInput />
        </Flex>

        <Button type="submit" gap={2} w="xl">
          <FiCoffee />
          Salvar
        </Button>
      </Center>
    </form>
  );
}
