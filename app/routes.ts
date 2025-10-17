import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("game/:pageNum", "routes/game.$pageNum.tsx"),
  route("end", "routes/end.tsx"),
] satisfies RouteConfig;
