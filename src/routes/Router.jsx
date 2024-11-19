import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Campaigns from "../pages/Campaigns";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/Login/Login";
  const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/campaigns",
          element:<Campaigns></Campaigns>,
          loader:()=>fetch('../public/aid.json')
        }
      ],
    },
    {
      path:"/auth",
      element:<AuthLayout></AuthLayout>,
      children:[
        {
          path:"/auth/login",
          element:<Login></Login>
        }
      ]
    }
  ]);
  export default router;