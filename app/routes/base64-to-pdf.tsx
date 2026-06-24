import Base64ToPdf from "~/components/Base64ToPdf";
import type { Route } from "./+types/base64-to-pdf";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Base64 to PDF" },
    { name: "description", content: "Convert base64 content into a PDF." },
  ];
}

export default function Base64ToPdfPage() {
  return <Base64ToPdf />;
}
