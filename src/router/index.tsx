import { createBrowserRouter } from "react-router-dom";
import ManageEmployee from "../pages/ManageEmployee";
import App from "../App";
import Dashboard from "../pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "dashboard", element: <Dashboard />, index: true },
      { path: "manage-employee", element: <ManageEmployee /> },
    ],
  },
]);

export default router;
