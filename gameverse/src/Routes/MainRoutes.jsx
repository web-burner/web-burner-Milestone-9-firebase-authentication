import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import HomeLayout from "../Layout/HomeLayout";
import Discover from "../Layout/Discover";
import Arcade from "../Layout/Arcade";
import GameDetails from "../Component/GameDetails";
import Login from "../Layout/Login";
import Register from "../Layout/Register";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../Layout/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        loader: () => fetch("/games.json"),
        Component: HomeLayout,
      },
      {
        path: "discover",
        loader: () => fetch("/games.json"),
        Component: Discover,
      },
      {
        path: "arcade",
        loader: () => fetch("/games.json"),
        Component: Arcade,
      },
      {
        path: "/gameDetails/:id",
        loader: () => fetch("/games.json"),
        element: (
          <PrivateRoutes>
            <GameDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <h1>404 Page Not Found</h1>,
  },
]);
