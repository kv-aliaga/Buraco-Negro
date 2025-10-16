import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home/Home";
import SimulationView from "./views/Simulation/SimulationView";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/simulation",
    element: <SimulationView />,
  },
];

const router = createBrowserRouter(routes, { basename: "/Buraco-Negro" });
export default router;
