import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import NotFound from "../pages/notFound/NotFound";
import Home from "../pages/home/Home";
import AddProduct from "../pages/addProduct/AddProduct";
import Login from "../pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/add-product", element: <AddProduct /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

export default router;
