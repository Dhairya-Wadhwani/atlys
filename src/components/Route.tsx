import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
