import type { Route } from "./+types/home";
import { Welcome } from "../components/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Base 64 Tools" },
    { name: "description", content: "Welcome to Base 64 Tools!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
