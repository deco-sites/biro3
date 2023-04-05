import { asset } from "$fresh/runtime.ts";
import { Fragment, h } from "preact";

export interface Props {
    title: string;
    description: string;
}

export default function LatestPost({
    title = "deco.cx — starter site",
    description = "Deliver complete commerce experiences — start here!",
    
  }: Props) {
  return (
    <div>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
  );
}
