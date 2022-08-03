import { Button } from "@chakra-ui/react";
import { Link, LinkProps } from "../Link";

export function ButtonLink({ children, ...rest }: LinkProps) {
  return (
    <Link {...rest}>
      <Button as="div" gap={2} cursor="pointer">
        <>{children}</>
      </Button>
    </Link>
  );
}
