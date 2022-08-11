import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Img,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ButtonLink } from "../ButtonLink";
import { EditLink } from "../EditLink";
import { Link } from "../Link";

interface LinkCardProps {
  href: string;
  title: string;
  description?: string;
  img?: {
    src: string;
    alt: string;
  };
}

export function LinkCard(props: LinkCardProps) {
  const { href, title, description = "", img } = props;

  const { isOpen, onClose, onOpen } = useDisclosure();

  const shortDescription =
    description.length <= 110
      ? description
      : description?.substring(0, 106) + "...";

  const bg = useColorModeValue("whiteAlpha.500", "blackAlpha.500");
  const color = useColorModeValue("green.900", "green.50");

  return (
    <Center
      as="article"
      bg={bg}
      color={color}
      gap={3}
      flexGrow="1"
      borderRadius="md"
      borderBottom="2px"
      borderColor="green.600"
      shadow="l"
      p={3}
    >
      <Box boxSize="200px" bg="gray.400" borderRadius="lg" overflow="hidden">
        <Img src={img?.src} alt={img?.alt} boxSize="200px" objectFit="cover" />
      </Box>

      <Container maxWidth={"40ch"}>
        <Text as="h3" fontWeight="bold" fontSize="large" mb={3}>
          {title}
        </Text>

        <Text mb={3}>{shortDescription}</Text>

        <Link color="greenyellow" href={href}>
          {href}
        </Link>

        <Flex mt={2} gap={3}>
          <ButtonLink href={href}>ACESSAR</ButtonLink>
          <Button onClick={onOpen}>OPÇÕES</Button>
          <EditLink isOpen={isOpen} onClose={onClose} />
        </Flex>
      </Container>
    </Center>
  );
}
