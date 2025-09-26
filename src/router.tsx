import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
];

const router = createBrowserRouter(routes, { basename: "/Buraco-Negro" });
export default router;
