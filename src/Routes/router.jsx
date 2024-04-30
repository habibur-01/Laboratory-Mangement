import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Profile from "../Pages/Profile/Profile";
import Invoice from "../Pages/Invoice/Invoice";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: "/dashboard",
            element: <Dashboard></Dashboard>
        },
        {
            path: "/profile",
            element: <Profile></Profile>
        },
        {
            path: "/invoices",
            element: <Invoice></Invoice>
        }
      ]
    },
  ]);

export default router;