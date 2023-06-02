import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import MovieDetails from "../pages/Home/MovieDetails/MovieDetails";
import HindiShows from "../pages/HindiShow/HindiShows";
import EnglishShow from "../pages/EnglishShow/EnglishShow";


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
      {
        path: "/hindi-show",
        element: <HindiShows />,
      },
      {
        path: "/english-show",
        element: <EnglishShow />,
      },
     
    ],
  },
]);

export default router;
