import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import NotFound from "../pages/notFound/NotFound";
import Home from "../pages/home/Home";
import AddProduct from "../pages/addProduct/AddProduct";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/add-product",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <PublicRoute>
            <Register />
          </PublicRoute>
        ),
      },
    ],
  },
]);

export default router;
