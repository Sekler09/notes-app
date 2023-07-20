import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import Notes from "../pages/Notes";
import AddNewNote from "../pages/AddNewNote";

export const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <Navigate to={"/notes"} replace />,
    },
    {
      path: "/notes",
      element: <Notes />
    },
    {
      path:"/new-note",
      element: <AddNewNote />
    },
    {
      path: "*",
      element: <h1>page not found</h1>
    }
  ]
}]);