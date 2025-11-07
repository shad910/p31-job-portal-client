import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ForgetPassword from "../Pages/Login/ForgetPassword";
import LearnMore from "../Pages/Register/LearnMore";
import Loading from "../Shared/Loading";
import PrivateRoute from "../Provider/PrivateRoute";
import Card from "../Pages/Card/Jobs";


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
        path: "jobs",
        loader: () => fetch('http://localhost:5000/jobs'),
        HydrateFallback: Loading,
        element: <PrivateRoute>
          <Card></Card>
        </PrivateRoute>,
        // Component: Card
      },
      {
        path: "about",
        element: <div>About Page</div>,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/auth/register",
        Component: Register
      },
      {
        path: "/auth/register/learn-more",
        Component: LearnMore
      },
      {
        path: "/auth/login",
        Component: Login
      },
      {
        path: "/auth/login/forget-password",
        Component: ForgetPassword
      },
    ],
  }
]);

export default router;