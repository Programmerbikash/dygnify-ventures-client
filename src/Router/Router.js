import { createBrowserRouter } from "react-router-dom";
import SignIn from "../Components/SignIn";
import Home from "../Home/Home";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/signIn",
          element: <SignIn />,
        },
      ],
    },
]);