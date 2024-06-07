import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../Misc/NotFoundPage";
import FrontEndLayout from "../Layout/FrontEndLayout";
import Acceuil from "../pages/Acceuil";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <FrontEndLayout />,
    children: [{ path: "/", element: <Acceuil /> }],
    errorElement: <NotFoundPage />,
  },
]);
