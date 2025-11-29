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
import JobCards from "../Shared/JobCards";
import JobDetails from "../Pages/JobDetails";
import JobsPage from "../Pages/JobsPage";
import CategoryLayout from "../Layouts/CategoryLayout";
import AddJobs from "../Pages/AddJobs";
// import CategoryHome from "../Pages/Category/CategoryHome";


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
        loader: () => fetch(`http://localhost:5000/jobs`),
        HydrateFallback: Loading,
        element: <PrivateRoute>
          <JobsPage></JobsPage>
        </PrivateRoute>,
      },
      {
        path: "jobDetails/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`),
        HydrateFallback: Loading,
        element: <PrivateRoute>
          <JobDetails></JobDetails>
        </PrivateRoute>,
      },
      {
        path: "add-jobs",
        Component:AddJobs
      },
      {
        path: "about",
        element: <div>About Page</div>,
      },
    ],
  },

  {
    path: "/category",
    Component: CategoryLayout,
    errorElement: <Error></Error>,
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