import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("game", "routes/game.tsx"),
  route("end", "routes/end.tsx"),
  route("games", "routes/firstVisitScreen.tsx"),
] satisfies RouteConfig;
