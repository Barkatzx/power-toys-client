import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Home";
import Login from "../Components/Login/Login";
import Blog from "../Components/Blog/Blog";
import Registration from "../Components/Registration/Registration.jsx";
import AddToys from "../Components/AddToys/AddToys";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import AllToys from "../Components/AllToys/AllToys";
import ToysDetails from "../Components/ToysDetails/ToysDetails";
import MyToys from "../Components/MyToys/MyToys";
import UpdateToys from "../Components/UpdateToys/UpdateToys";

const router = createBrowserRouter([
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
      },
      {
        path: "/my-toys",
        element: <MyToys></MyToys>,
      },
      {
        path: '/my-toys/updateToys/:id', 
        element: <UpdateToys></UpdateToys>, 
        loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
      },
      {
        path: "/toys",
        element: <AllToys/>,
        loader: () => fetch('http://localhost:5000/toys'),
      },
      {
        path: '/toys/:id',
        element: <PrivateRoutes><ToysDetails /></PrivateRoutes>,
      }
    ]
  }
]);

export default router;