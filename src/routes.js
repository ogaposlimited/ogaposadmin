// import { Navigate } from "react-router-dom";

// import AdminRoute from "./components/admindashboard/AdminRoute";
// import sessionRoutes from "./components/sessions/SessionRoutes";
// // import AdminDashboard from "./components/admindashboard/admin/AdminDashboard";

// const routes = [
//   {
//     path: "/admin-dashboard",
//     element: <AdminRoute />,
//   },
//   ...sessionRoutes,
//   { path: "/", element: <Navigate to="/login" /> },
// ];

// export default routes;

// src/routes.js
import { Navigate } from "react-router-dom";
import AdminRoute from "./components/admindashboard/AdminRoute";
import sessionRoutes from "./components/sessions/SessionRoutes";
import SalesRoute from "./components/salesdashboard/SalesRoute";
import ManagerRoute from "./components/managerdashboard/ManagerRoute";

const routes = [
  ...AdminRoute,
  ...SalesRoute,
  ...ManagerRoute,
  ...sessionRoutes,
  { path: "/", element: <Navigate to="/login" /> },
];

export default routes;
