import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/mainlayout/MainLayout";
import NotFound from "../pages/notFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <h1 className="text-4xl font-bold text-center mt-10">
            Welcome to KeenKeeper
          </h1>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
