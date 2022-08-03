import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Spacer,
  Stack,
  Tag,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { KeyboardEvent, useState } from "react";
import { FiCoffee } from "react-icons/fi";
import { ButtonLink } from "../components/ButtonLink";

export default function Start() {
  const toast = useToast();
  const [tags, setTags] = useState<string[]>([]);

  const bg = useColorModeValue("whiteAlpha.500", "blackAlpha.500");
  const color = useColorModeValue("green.900", "green.50");

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;

    const value = event.currentTarget.value;

    if (!value.trim()) return;

    if (tags.length === 8) {
      if (!toast.isActive("warn-tag-quantity")) {
        toast({
          id: "warn-tag-quantity",
          title: "Não é possível adicionar mais tags",
          status: "warning",
          isClosable: true,
          position: "top",
          duration: 900,
        });
      }

      return;
    }

    setTags([...tags, value]);

    event.target.value = "";
  };

  const handleDelete = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

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

        <form action="">
          <Center flexDirection="column" gap={3}>
            <Flex direction="column" gap={5} w="90%">
              <Text>ADICIONE UM NOVO LINK</Text>

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

              <FormControl>
                <FormLabel>Tags</FormLabel>
                <Input
                  variant="filled"
                  bg="whiteAlpha.400"
                  name="tags"
                  onKeyDown={handleKeyDown}
                />

                <Wrap minH="2.5rem" mt={2}>
                  {tags.map((tag, index) => {
                    return (
                      <WrapItem
                        bg="green.600"
                        alignItems="center"
                        borderRadius="lg"
                        gap={2}
                        py={1}
                        px={2}
                        pr={1}
                      >
                        {tag}

                        <IconButton
                          onClick={() => handleDelete(index)}
                          size={"sm"}
                          variant="ghost"
                          aria-label="tag"
                        >
                          <FiCoffee />
                        </IconButton>
                      </WrapItem>
                    );
                  })}
                </Wrap>
              </FormControl>
            </Flex>

            <Button type="submit" gap={2}>
              <FiCoffee />
              Salvar
            </Button>
          </Center>
        </form>

        <Spacer />

        <ButtonLink href="/dashboard">
          <FiCoffee />
          GERENCIAR LINKS
        </ButtonLink>
      </Stack>
    </Center>
  );
}
