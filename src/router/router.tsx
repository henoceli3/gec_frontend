import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../Misc/NotFoundPage";
import FrontEndLayout from "../Layout/FrontEndLayout";
import Acceuil from "../pages/Acceuil";
import Activites from "../pages/Activites";
import Temoignages from "../pages/Temoignages";
import Dons from "../pages/Dons";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <FrontEndLayout />,
    children: [
      { path: "/", element: <Acceuil /> },
      { path: "activites", element: <Activites /> },
      { path: "temoignages", element: <Temoignages /> },
      { path: "dons", element: <Dons /> },
    ],
    errorElement: <NotFoundPage />,
  },
]);
