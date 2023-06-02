import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import MovieDetails from "../pages/Home/MovieDetails/MovieDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie-details/:id",
        element: <MovieDetails />,
      },
     
    ],
  },
]);

export default router;
