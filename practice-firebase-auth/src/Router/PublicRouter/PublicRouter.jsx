import { createBrowserRouter } from "react-router";
import Root from "../../Root/Root";
import Home from "../../Component/Home/Home";
import Register from "../../Component/Register/Register";
import Login from "../../Component/Login/Login";
import Orders from "../../Component/Orders/Orders";
import Profile from "../../Component/Profile/Profile";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Dashboard from "../../Component/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "register", Component: Register },
      { path: "login", Component: Login },
      {
        path: 'dashboard',
        element: <PrivateRouter>
          <Dashboard/>
        </PrivateRouter>
      },
      {
        path: "orders",
        element: (
          <PrivateRouter>
            <Orders />
          </PrivateRouter>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRouter>
            <Profile />
          </PrivateRouter>
        ),
      },
    ],
  },
]);

export default router;
