import { FormControl, FormLabel, Input, InputGroup } from "@chakra-ui/react";

export function EmailInput() {
  return (
    <FormControl isRequired>
      <FormLabel>E-mail</FormLabel>

      <InputGroup>
        <Input
          type="email"
          name="email"
          variant="filled"
          placeholder="exemplo@email.com"
        />
      </InputGroup>
    </FormControl>
  );
}
