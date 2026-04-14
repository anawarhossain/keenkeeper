import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/mainlayout/MainLayout";
import NotFound from "../pages/notFound/NotFound";
import Home from "../pages/home/Home";
import FriendDetails from "../pages/friendDetails/FriendDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/friend/:FriendId",
        element: <FriendDetails />,
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
