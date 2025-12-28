import { createBrowserRouter } from "react-router";
import axios from "axios";
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
import JobDetails from "../Pages/JobDetails";
import CategoryLayout from "../Layouts/CategoryLayout";
import AddJobs from "../Pages/AddJobs";
import MyPostedJobs from "../Pages/MyPostedJobs";
import MyApplication from "../Pages/MyApplication/MyApplication";
import UpdateJobDetails from "../Pages/UpdateJobDetails";
import Category from "../Pages/Category/Categorys";
import CategoryJobs from "../Pages/Category/CategoryJobs";
import JobApply from "../Pages/JobApply";
import ViewApplication from "../Pages/ViewApplication";
import UpdateJobApply from "../Pages/UpdateJobApply";



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
        path: "jobDetails/:id",
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`),
        HydrateFallback: Loading,
        element: <PrivateRoute>
          <JobDetails></JobDetails>
        </PrivateRoute>,
      },
      {
        path: "add-jobs",
        element: <PrivateRoute>
          <AddJobs></AddJobs>
        </PrivateRoute>
      },
      {
        path: "update-job/:id",
        loader: ({ params }) => axios(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`),
        HydrateFallback: Loading,
        element: <PrivateRoute>
          <UpdateJobDetails></UpdateJobDetails>
        </PrivateRoute>
      },
      {
        path: "my-posted-jobs",
        loader: () => axios(`${import.meta.env.VITE_API_URL}/jobs`, {withCredentials:true}),
        HydrateFallback: Loading,
        element: <PrivateRoute>
          <MyPostedJobs></MyPostedJobs>
        </PrivateRoute>
      },
      {
        path: "my-application",
        element: <PrivateRoute>
          <MyApplication></MyApplication>
        </PrivateRoute>
      },
      {
        path: "job-apply/:id",
        loader: ({ params }) => axios(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`),
        HydrateFallback: Loading,
        Component: JobApply
      },
      {
        path: "update-application/:id",
        loader: ({ params }) => axios(`${import.meta.env.VITE_API_URL}/applications/${params.id}`),
        HydrateFallback: Loading,
        element: <PrivateRoute>
          <UpdateJobApply></UpdateJobApply>
        </PrivateRoute>
      },
      {
        path: "applications/:id",
        loader: ({ params }) => axios(`${import.meta.env.VITE_API_URL}/applications/job/${params.id}`),
        HydrateFallback: Loading,
        element: <PrivateRoute>
          <ViewApplication></ViewApplication>
        </PrivateRoute>

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
    children: [
      {
        path: "",
        element: <PrivateRoute>
          <Category></Category>
        </PrivateRoute>
      },
      {
        path: ":id",
        loader: () => axios(`${import.meta.env.VITE_API_URL}/jobs`),
        HydrateFallback: Loading,
        Component: CategoryJobs
      },
    ]
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