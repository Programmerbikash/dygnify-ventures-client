import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Past from "../Pages/Events/Past/Past";
import Upcoming from '../Pages/Events/Upcoming/Upcoming'
import Home from "../Pages/Home/Home/Home";
import JobBoards from "../Pages/JobBoards/JobBoards";

// https://joinnova.co/jobs

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
          path: "/upcoming",
          element: <Upcoming />,
        },
        {
          path: "/past",
          element: <Past />,
        },
        {
          path: "/jobBoards",
          element: <JobBoards />,
        },
      ],
    },
]);