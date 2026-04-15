import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/mainlayout/MainLayout";
import NotFound from "../pages/notFound/NotFound";
import Home from "../pages/home/Home";
import FriendDetails from "../pages/friendDetails/FriendDetails";
import TimeLine from "../pages/timeLine/TimeLine";

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
        path: "/timeline",
        element: <TimeLine />,
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
