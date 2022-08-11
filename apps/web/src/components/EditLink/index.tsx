import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useColorModeValue,
  UseDisclosureProps,
} from "@chakra-ui/react";
import { LinkForm } from "../LinkForm";

export function EditLink(props: UseDisclosureProps) {
  const { isOpen, onClose } = props;

  const bg = useColorModeValue("gray.300", "gray.900");
  const color = useColorModeValue("gray.800", "gray.50");

  return (
    <Drawer
      size="xl"
      isOpen={!!isOpen}
      placement="right"
      onClose={() => onClose && onClose()}
    >
      <DrawerOverlay />

      <DrawerContent bg={bg} color={color}>
        <DrawerCloseButton />

        <DrawerHeader borderBottomWidth="1px">Editar link</DrawerHeader>

        <DrawerBody>
          <Center h="100%">
            <Box w="100%">
              <LinkForm />
            </Box>
          </Center>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
