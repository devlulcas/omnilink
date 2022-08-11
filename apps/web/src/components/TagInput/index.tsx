import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  useToast,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { KeyboardEvent, useState } from "react";
import { FiCoffee } from "react-icons/fi";

export function TagInput() {
  const toast = useToast();
  const [tags, setTags] = useState<string[]>([]);

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
  );
}
