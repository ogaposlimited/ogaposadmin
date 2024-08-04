// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import About from "./pages/About";
// // import Home from "./pages/Home";
// // import Login from "./pages/Login";
// import AdminDashboard from "./admin/AdminDashboard";
// const AdminRoute = [
//   <Route exact path="admin-dashboard" element={<AdminDashboard />

//   } />,
// ];

// export default AdminRoute;
// src/AdminRoute.js
import React from "react";
import { Route } from "react-router-dom";
import AdminDashboard from "./admin/AdminDashboard";
import ViewAdmin from "./admin/ViewAdmin";
import AllSale from "./forms/AllSale";
import Invoice from "./forms/Invoice";
import Quotation from "./forms/Quotation";
import AllPurchase from "./forms/AllPurchase";
import AllExpense from "./forms/AllExpense";
import AddSale from "./forms/AddSale";
import Profile from "./forms/Profile";
import Setting from "./forms/Setting";
import AllUsers from "./forms/AllUsers";
import Role from "./forms/Role";
import Permission from "./forms/Permission";
import SalesDashboard from "../salesdashboard/sales/SalesDashboard";

const AdminRoute = [
  {
    path: "/admin-dashboard",
    element: <AdminDashboard />,
    auth: "admin",
  },
  { path: "/view-admin", element: <ViewAdmin />, auth: "admin" },
  { path: "/sales-dashboard", element: <SalesDashboard />, auth: "admin" },
  { path: "/sales-list", element: <AllSale />, auth: "admin" },
  { path: "/invoice-report", element: <Invoice />, auth: "admin" },
  { path: "/quotation-list", element: <Quotation />, auth: "admin" },
  { path: "/purchase-list", element: <AllPurchase />, auth: "admin" },
  { path: "/expense-list", element: <AllExpense />, auth: "admin" },
  { path: "/add-sales", element: <AddSale />, auth: "admin" },
  { path: "/profile", element: <Profile />, auth: "admin" },
  { path: "/settings", element: <Setting />, auth: "admin" },
  { path: "/all-users", element: <AllUsers />, auth: "admin" },
  { path: "/role-permission", element: <Role />, auth: "admin" },
  { path: "/permission", element: <Permission />, auth: "admin" },
];

export default AdminRoute;
