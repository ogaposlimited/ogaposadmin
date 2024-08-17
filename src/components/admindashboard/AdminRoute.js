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
import ViewManager from "./admin/ViewManager";
import ViewSalesUsers from "./admin/ViewSalesUsers";
import AddSalesPage from "./forms/AddSalesPage";
import ViewPoints from "./forms/ViewPoints";
import ViewDisSales from "./forms/ViewDisSales";
import ViewDisManager from "./forms/ViewDisManager";

const AdminRoute = [
  {
    path: "/admin-dashboard",
    element: <AdminDashboard />,
    auth: "admin",
  },
  { path: "/view-admin", element: <ViewAdmin />, auth: "admin" },
  { path: "/view-manager", element: <ViewManager />, auth: "admin" },
  {
    path: "/view-sales-disbursement",
    element: <ViewDisSales />,
    auth: "admin",
  },
  {
    path: "/view-manager-disbursement",
    element: <ViewDisManager />,
    auth: "admin",
  },
  { path: "/view-manager", element: <ViewManager />, auth: "admin" },
  { path: "/view-sales-operators", element: <ViewSalesUsers />, auth: "admin" },
  { path: "/sales-dashboard", element: <SalesDashboard />, auth: "admin" },
  { path: "/sales-list", element: <AllSale />, auth: "admin" },
  { path: "/invoice-report", element: <Invoice />, auth: "admin" },
  { path: "/quotation-list", element: <Quotation />, auth: "admin" },
  { path: "/purchase-list", element: <AllPurchase />, auth: "admin" },
  { path: "/expense-list", element: <AllExpense />, auth: "admin" },
  { path: "/add-sales", element: <AddSale />, auth: "admin" },
  { path: "/view-points", element: <ViewPoints />, auth: "admin" },
  { path: "/add-sales-page", element: <AddSalesPage />, auth: "admin" },
  { path: "/profile", element: <Profile />, auth: "admin" },
  { path: "/settings", element: <Setting />, auth: "admin" },
  { path: "/all-users", element: <AllUsers />, auth: "admin" },
  { path: "/role-permission", element: <Role />, auth: "admin" },
  { path: "/permission", element: <Permission />, auth: "admin" },
];

export default AdminRoute;
