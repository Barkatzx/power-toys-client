import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Layout/Home";
import Login from "../Components/Login/Login";
import Blog from "../Components/Blog/Blog";

    const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/blogs",
          element: <Blog></Blog>,
        },
      ],
    },
  ]);
  
  export default router;