import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Img,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ButtonLink } from "../ButtonLink";
import { Link } from "../Link";

interface LinkCardProps {
  href: string;
  title: string;
  description?: string;
  imgSrc?: string;
}

export function LinkCard(props: LinkCardProps) {
  const { href, title, description = "", imgSrc } = props;

  const shortDescription =
    description.length <= 120
      ? description
      : description?.substring(0, 116) + "...";

  const bg = useColorModeValue("whiteAlpha.500", "blackAlpha.500");
  const color = useColorModeValue("green.900", "green.50");

  return (
    <Center
      as="article"
      bg={bg}
      color={color}
      gap={3}
      borderRadius="md"
      borderBottom="2px"
      borderColor="green.600"
      shadow="l"
      p={3}
    >
      <Img
        boxSize="150px"
        objectFit="cover"
        src="https://bit.ly/favicon.ico"
        alt="Dan Abramov"
      />

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
          <Button>OPÇÕES</Button>
        </Flex>
      </Container>
    </Center>
  );
}
