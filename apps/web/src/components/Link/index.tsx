import {
  LinkProps as ChakraLinkProps,
  Link as ChakraLink,
} from "@chakra-ui/react";

import NextLink from "next/link";

export type LinkProps = Omit<ChakraLinkProps, "as">;

export function Link(props: LinkProps) {
  return <ChakraLink as={NextLink} {...props} />;
}
