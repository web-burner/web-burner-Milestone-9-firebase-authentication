import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import HomeLayout from "../Layout/HomeLayout";
import Discover from "../Layout/Discover";
import Arcade from "../Layout/Arcade";
import GameDetails from "../Component/GameDetails";
import Login from "../Layout/Login";
import Register from "../Layout/Register";
import PrivateRoutes from "./PrivateRoutes";
import ProfileEdit from "../Component/ProfileEdit";
import ProfileSettings from "../Component/ProfileSettings";
import ForgotPassword from "../Layout/ForgotPassword";
import ErrorPage from "../Layout/ErrorPage";
import UpdatePassword from "../Layout/UpdatePassword";
import Spinner from "../Component/Spinner";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement: <Spinner />,
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
        path: "forgotPassword",
        Component: ForgotPassword
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <ProfileSettings />
          </PrivateRoutes>
        ),
      },
      {
        path: "/profile/edit",
        element: (
          <PrivateRoutes>
            <ProfileEdit />
          </PrivateRoutes>
        ),
      },
      {
        path: "/profile/updatePassword",
        element: (
          <PrivateRoutes>
            <UpdatePassword />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
