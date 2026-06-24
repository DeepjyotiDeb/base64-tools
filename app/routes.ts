import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("./components/layout.tsx", [
    index("routes/home.tsx"),
    route("base64-to-pdf", "routes/base64-to-pdf.tsx"),
  ]),
] satisfies RouteConfig;
