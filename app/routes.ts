import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("game/:id", "routes/game.$id.tsx"),
  route("end", "routes/end.tsx"),
] satisfies RouteConfig;
