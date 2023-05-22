import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Home";
import Login from "../Components/Login/Login";
import Blog from "../Components/Blog/Blog";
import Registration from "../Components/Registration/Registration.jsx";
import AddToys from "../Components/AddToys/AddToys";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../Components/ErrorPage/ErrorPage";


const router = createBrowserRouter ([
  {
    path: "/",
    element: <Main/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/blogs",
        element: <Blog/>,
      },
      {
        path: "/register",
        element: <Registration/>,
      },
      {
        path: "/add-toy",
        element: <PrivateRoutes><AddToys/></PrivateRoutes>,
      }
    ]
  },
]);
export default router;