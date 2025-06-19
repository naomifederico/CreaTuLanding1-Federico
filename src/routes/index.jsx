import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Item from "../pages/Item";
import Category from "../pages/Category";


const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/item/:id",
        element: <Item />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

