import { RouteObject, useRoutes } from "react-router-dom";
import Home from "./page/Home";
import MainLayout from "./layout/MainLayout";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/project",
        element: <div>Project</div>,
      },
    ],
  },
];

const AppRoutes = () => {
  return useRoutes(routes);
};

export default AppRoutes;
