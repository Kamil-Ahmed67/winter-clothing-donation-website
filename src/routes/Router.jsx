import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Campaigns from "../pages/Campaigns";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Error from "../components/Error/Error";
import DonationDetails from "../pages/DonationDetails";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../components/Dashboard/Dashboard";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import HowItWorks from "../components/HowItWorks/HowItWorks";
  const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      errorElement:<Error></Error>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/campaigns",
          element:<Campaigns></Campaigns>,
          loader:()=>fetch('../aid.json')
        },
        {
          path:"/help",
          element:<HowItWorks></HowItWorks>
        }
      ]
    },
    {
      path:"/donation/:donationId",
      element:<PrivateRouter><DonationDetails></DonationDetails></PrivateRouter>,
      loader:()=>fetch('../aid.json')
    },
    {
      path:"/dashboard",
      element:<PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
    },
    {
      path: '/update-profile',
      element: <PrivateRouter><UpdateProfile></UpdateProfile></PrivateRouter>,
    },
    {
      path:"/auth",
      element:<AuthLayout></AuthLayout>,
      errorElement:<Error></Error>,
      children:[
        {
          path:"/auth/login",
          element:<Login></Login>
        },
        {
          path:"/auth/register",
          element:<Register></Register>
        }
      ]
    }
  ]);
  export default router;