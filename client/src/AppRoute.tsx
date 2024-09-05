import { RouteObject, useRoutes } from "react-router-dom";
import HomePage from "./page/HomePage";
import MainLayout from "./layout/MainLayout";
import ProjectPage from "./page/ProjectPage";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/project",
        element: <ProjectPage />,
      },
    ],
  },
];

const AppRoutes = () => {
  return useRoutes(routes);
};

export default AppRoutes;
