import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Albums from "./routes/Albums";
import Users from "./routes/Users";
import User from "./routes/User";
import Layout from "./routes/Layout";
import Album from "./routes/Album";
import ErrorPage from "./routes/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Albums />,
      },
      {
        path: "/albums",
        element: <Albums />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/users/:id",
        element: <User />,
      },
      {
        path: "/albums/:id/:userId",
        element: <Album />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default function App() {
  return (
    <div className="allElements">
      <RouterProvider router={router} />
    </div>
  );
}
