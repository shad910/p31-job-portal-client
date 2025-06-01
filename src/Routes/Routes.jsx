import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "about",
        element: <div>About Page</div>,
      },
    ],
  },
]);

export default router;