import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import NotFound from "../pages/notFound/NotFound";
import Home from "../pages/home/Home";
import AddProduct from "../pages/addProduct/AddProduct";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import BrandDetails from "../pages/brandDetails/BrandDetails";
import ProductDetails from "../pages/productDetails/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/brand-details/:brand", element: <BrandDetails /> },
      {
        path: "/add-product",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/product-details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
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
