import { Center, Wrap, WrapItem } from "@chakra-ui/react";
import { LinkCard } from "../components/LinkCard";

export default function Dashboard() {
  const list = Array(30).fill(null);

  return (
    <Wrap
      alignItems={"center"}
      justifyContent="center"
      overflowY="scroll"
      minH="94vh"
      p="2rem"
      spacing={8}
    >
      {list.map((value, index) => (
        <WrapItem flexGrow="1" key={index}>
          <LinkCard
            href="https://github.com/"
            title="Github"
            description="Keep your code in the right place. Lorem ipsum dolor at sit. Lorem ipsum dolor at sit. Lorem ipsum dolor at sit. Lorem ipsum dolor at sit."
            img={{ alt: "", src: "" }}
          />
        </WrapItem>
      ))}
    </Wrap>
  );
}
