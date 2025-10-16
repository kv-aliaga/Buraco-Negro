import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home/Home";
import Simulation from "./views/Simulation/Simulation";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/simulation",
    element: <Simulation />,
  },
];

const router = createBrowserRouter(routes, { basename: "/Buraco-Negro" });
export default router;
