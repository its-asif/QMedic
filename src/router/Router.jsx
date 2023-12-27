import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Dashboard from "../layout/Dashboard";
import AppointmentQueue from "../pages/dashboard/AppointmentQueue";
import AppointmentList from "../pages/dashboard/adminSection/AppointmentList";
import UserProfile from "../pages/dashboard/common/UserProfile";

  
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
          {
            path: "/dashboard/appointments",
            element: <AppointmentList />,
          },
          {
            path: "/dashboard/userProfile",
            element: <UserProfile />,
          },
      ],
      },
  ]);

  export default router;