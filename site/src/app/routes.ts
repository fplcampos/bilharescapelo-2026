import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../pages/Home";
import CategoryPage from "../pages/CategoryPage";
import ProductDetail from "../pages/ProductDetail";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Root,
      children: [
        { index: true, Component: Home },
        { path: "categoria/:categoryId", Component: CategoryPage },
        { path: "produto/:productId", Component: ProductDetail },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);
