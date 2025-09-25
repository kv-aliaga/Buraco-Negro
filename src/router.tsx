import { createBrowserRouter } from "react-router-dom";
import MainView from "./views/MainView";

export const routes = [
  {
    path: "/",
    element: <MainView />,
  },
];

const router = createBrowserRouter(routes, { basename: "/Buraco-Negro" });
export default router;
