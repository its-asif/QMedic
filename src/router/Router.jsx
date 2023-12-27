import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Dashboard from "../layout/Dashboard";
import AppointmentQueue from "../pages/dashboard/AppointmentQueue";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
    ],
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard/appointmentQueue",
            element: <AppointmentQueue />,
          },
      ],
      },
  ]);

  export default router;