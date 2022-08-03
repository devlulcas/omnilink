import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export function PasswordInput() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <FormControl isRequired>
      <FormLabel>Senha</FormLabel>

      <InputGroup>
        <Input
          type={isVisible ? "text" : "password"}
          name="password"
          variant="filled"
          placeholder="************"
        />

        <InputRightAddon
          as="button"
          type="button"
          onClick={() => setIsVisible((visibility) => !visibility)}
        >
          {isVisible ? <FiEye /> : <FiEyeOff />}
        </InputRightAddon>
      </InputGroup>
    </FormControl>
  );
}
