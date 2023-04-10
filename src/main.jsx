import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/Layout/Main";
import Home from "./components/Home/Home";
import JobDetails from "./components/JobDetails/JobDetails";
import Statistic from "./components/Statistic/Statistic";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "job/:id",
        element: <JobDetails></JobDetails>,
        loader:({params})=> fetch('/featuredJobs.json')
      },
      {
        path: "statistic",
        element: <Statistic></Statistic>,
      },
      {
        path: 'applied-jobs',
        element:<AppliedJobs></AppliedJobs>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
