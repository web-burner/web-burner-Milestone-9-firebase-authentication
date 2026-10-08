import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Auth from "../layouts/Auth";
import News from "../layouts/News";
import Home from "../Components/Home";
import CategoryNews from "../Components/CategoryNews";
import axios from "axios";
import Login from "../Components/Login";
import Register from "../Components/Register";
import NewsDetails from "../Components/NewsDetails";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    loader: async () => {
      const res = await axios.get("/categories.json");
      return res.data;
    },
    Component: HomeLayout,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      { index: true, loader: () => axios("/news.json"), Component: Home },
      {
        path: "category/:categoryId",
        loader: async () => {
          const res = await axios.get("/news.json");
          return res.data;
        },
        hydrateFallbackElement: <p>Loading...</p>,

        Component: CategoryNews,
      },
    ],
  },
  {
    path: "/newsDetails/:id",
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <p>Loading...</p>,

    element: (
      <PrivateRoutes>
        <NewsDetails />
      </PrivateRoutes>
    ),
  },
  {
    path: "auth",
    Component: Auth,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "news",
    Component: News,
  },
  {
    path: "*",
    element: <h1>Error 404</h1>,
  },
]);

export default router;
