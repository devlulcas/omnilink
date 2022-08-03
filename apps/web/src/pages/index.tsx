import { LinkCard } from "../components/LinkCard";

export default function HomePage() {
  return (
    <>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        perferendis quae laboriosam et delectus, ratione aut veniam vel ducimus
        assumenda facilis quidem in necessitatibus fugiat incidunt sit accusamus
        aliquid amet?
      </h1>

      <LinkCard
        href="https://bit.ly/dan-abramov"
        title="Link incrível"
        description="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        perferendis quae laboriosam et delectus, ratione aut veniam vel ducimus
        assumenda facilis quidem in necessitatibus fugiat incidunt sit accusamus
        aliquid amet?"
      />
    </>
  );
}
