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

const routes = [
  ...AdminRoute, // Spread the AdminRoute array here
  ...sessionRoutes,
  { path: "/", element: <Navigate to="/login" /> },
];

export default routes;
