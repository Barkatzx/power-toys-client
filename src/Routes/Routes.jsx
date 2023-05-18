import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Home";
import Login from "../Components/Login/Login";
import Blog from "../Components/Blog/Blog";


const router = createBrowserRouter ([
  {
    path: "/",
    element: <Main/>,
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
      }
    ]
  },
]);
export default router;