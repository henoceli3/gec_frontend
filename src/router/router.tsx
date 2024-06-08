import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../Misc/NotFoundPage";
import FrontEndLayout from "../Layout/FrontEndLayout";
import Acceuil from "../pages/Acceuil";
import Activites from "../pages/Activites";
import Temoignages from "../pages/Temoignages";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <FrontEndLayout />,
    children: [
      { path: "/", element: <Acceuil /> },
      { path: "activite", element: <Activites /> },
      { path: "temoignages", element: <Temoignages /> },
    ],
    errorElement: <NotFoundPage />,
  },
]);
