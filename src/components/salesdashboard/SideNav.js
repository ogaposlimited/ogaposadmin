import { useState } from "react";
import logo from "./oga4.png";
import axios from "axios";
import { Link } from "react-router-dom";

const SideNav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState(new Set());

  const toggleSubmenu = (index) => {
    const updatedSubmenus = new Set(openSubmenus);
    if (updatedSubmenus.has(index)) {
      updatedSubmenus.delete(index);
    } else {
      updatedSubmenus.add(index);
    }
    setOpenSubmenus(updatedSubmenus);
  };

  return (
    <div className="main-wrapper">
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="submenu-open">
                <h6 className="submenu-hdr">Main</h6>
                <ul>
                  <li className="submenu">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSubmenu(0);
                      }}
                      className={openSubmenus.has(0) ? "subdrop active" : ""}
                    >
                      <i data-feather="grid"></i>
                      <span>Dashboard</span>
                      <span className="menu-arrow"></span>
                    </a>
                    {openSubmenus.has(0) && (
                      <ul>
                        <li>
                          <Link to="/admin-dashboard" className="active">
                            Admin Dashboard
                          </Link>
                        </li>
                        <li>
                          <a
                            href="https://dreamspos.dreamstechnologies.com/html/template/index.html"
                            className="active"
                          >
                            Manager Dashboard
                          </a>
                        </li>
                        <li>
                          <a href="https://dreamspos.dreamstechnologies.com/html/template/sales-dashboard.html">
                            Sales/Staff Dashboard
                          </a>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>

                <ul>
                  <li className="submenu">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSubmenu(10);
                      }}
                      className={openSubmenus.has(10) ? "subdrop active" : ""}
                    >
                      <i data-feather="grid"></i>
                      <span>View Role</span>
                      <span className="menu-arrow"></span>
                    </a>
                    {openSubmenus.has(10) && (
                      <ul>
                        <li>
                          <Link to="/view-admin">Admin</Link>
                        </li>
                        <li>
                          <a href="https://dreamspos.dreamstechnologies.com/html/template/index.html">
                            Manager
                          </a>
                        </li>
                        <li>
                          <a href="https://dreamspos.dreamstechnologies.com/html/template/sales-dashboard.html">
                            Sales/Staff
                          </a>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              </li>

              {/*<li className="submenu-open">
                <h6 className="submenu-hdr">Transactions</h6>
                <ul>
                  <li>
                    <a href="https://dreamspos.dreamstechnologies.com/html/template/manage-stocks.html">
                      <i data-feather="package"></i>
                      <span>Admin </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://dreamspos.dreamstechnologies.com/html/template/manage-stocks.html">
                      <i data-feather="package"></i>
                      <span>Manager </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://dreamspos.dreamstechnologies.com/html/template/stock-adjustment.html">
                      <i data-feather="clipboard"></i>
                      <span>Staff </span>
                    </a>
                  </li>
                </ul>
              </li>*/}
              <li className="submenu-open">
                <ul>
                  <li className="submenu">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSubmenu(11);
                      }}
                      className={openSubmenus.has(11) ? "subdrop active" : ""}
                    >
                      <i data-feather="grid"></i>
                      <span>Sales</span>
                      <span className="menu-arrow"></span>
                    </a>
                    {openSubmenus.has(11) && (
                      <ul>
                        <li>
                          <Link to="/sales-list" className="active">
                            List Sales
                          </Link>
                        </li>
                        <li>
                          <a
                            href="https://dreamspos.dreamstechnologies.com/html/template/index.html"
                            className="active"
                          >
                            Add Sales
                          </a>
                        </li>
                        {/* <li>
                          <a
                            href="https://dreamspos.dreamstechnologies.com/html/template/index.html"
                            className="active"
                          >
                            Receipt
                          </a>
                        </li>*/}
                        <li>
                          <a
                            href="https://dreamspos.dreamstechnologies.com/html/template/index.html"
                            className="active"
                          >
                            Quotation
                          </a>
                        </li>
                        <li>
                          <a href="https://dreamspos.dreamstechnologies.com/html/template/sales-dashboard.html">
                            Invoice
                          </a>
                        </li>

                        {/*} <li>
                          <a href="https://dreamspos.dreamstechnologies.com/html/template/sales-dashboard.html">
                            Sales Report
                          </a>
                        </li>*/}
                      </ul>
                    )}
                  </li>
                </ul>
              </li>

              <li className="submenu-open">
                <ul>
                  <li className="submenu">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSubmenu(12);
                      }}
                      className={openSubmenus.has(12) ? "subdrop active" : ""}
                    >
                      <i data-feather="grid"></i>
                      <span>Purchase</span>
                      <span className="menu-arrow"></span>
                    </a>
                    {openSubmenus.has(12) && (
                      <ul>
                        <li>
                          <a
                            href="https://dreamspos.dreamstechnologies.com/html/template/index.html"
                            className="active"
                          >
                            List Purchase
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://dreamspos.dreamstechnologies.com/html/template/index.html"
                            className="active"
                          >
                            Add Purchases
                          </a>
                        </li>
                        {/*} <li>
                          <a
                            href="https://dreamspos.dreamstechnologies.com/html/template/index.html"
                            className="active"
                          >
                            Receipt
                          </a>
                        </li>*/}
                        <li>
                          <a
                            href="https://dreamspos.dreamstechnologies.com/html/template/index.html"
                            className="active"
                          >
                            Quotation
                          </a>
                        </li>
                        {/*}  <li>
                          <a href="https://dreamspos.dreamstechnologies.com/html/template/sales-dashboard.html">
                            Pending
                          </a>
                        </li>*/}
                        <li>
                          <a href="https://dreamspos.dreamstechnologies.com/html/template/sales-dashboard.html">
                            Invoice
                          </a>
                        </li>
                        {/*} <li>
                          <a href="https://dreamspos.dreamstechnologies.com/html/template/sales-dashboard.html">
                            Purchase Report
                          </a>
                        </li>*/}
                      </ul>
                    )}
                  </li>
                </ul>
              </li>
              <li className="submenu-open">
                <h6 className="submenu-hdr">Finance & Accounts</h6>
                <ul>
                  <li className="submenu">
                    <a
                      href="javascript:void(0);"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSubmenu(1);
                      }}
                      className={openSubmenus.has(1) ? "subdrop active" : ""}
                    >
                      <i data-feather="file-text"></i>
                      <span>Expenses</span>
                      <span className="menu-arrow"></span>
                    </a>
                    {openSubmenus.has(1) && (
                      <ul>
                        <li>
                          <a href="https://dreamspos.dreamstechnologies.com/html/template/expense-list.html">
                            Expenses
                          </a>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              </li>

              <li className="submenu-open">
                <h6 className="submenu-hdr">User Management</h6>
                <ul>
                  <li>
                    <a href="https://dreamspos.dreamstechnologies.com/html/template/users.html">
                      <i data-feather="user-check"></i>
                      <span>Users</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://dreamspos.dreamstechnologies.com/html/template/roles-permissions.html">
                      <i data-feather="shield"></i>
                      <span>Roles & Permissions</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="submenu-open">
                <h6 className="submenu-hdr">Pages</h6>
                <ul>
                  <li>
                    <a href="https://dreamspos.dreamstechnologies.com/html/template/profile.html">
                      <i data-feather="user"></i>
                      <span>Profile</span>
                    </a>
                  </li>
                  <li className="submenu">
                    <a
                      href="javascript:void(0);"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSubmenu(2);
                      }}
                      className={openSubmenus.has(2) ? "subdrop active" : ""}
                    >
                      <i data-feather="shield"></i>
                      <span>Authentication</span>
                      <span className="menu-arrow"></span>
                    </a>
                    {openSubmenus.has(2) && (
                      <ul>
                        <li className="submenu submenu-two">
                          <a href="javascript:void(0);">
                            Login
                            <span className="menu-arrow inside-submenu"></span>
                          </a>
                        </li>

                        <li className="submenu submenu-two">
                          <a href="javascript:void(0);">
                            Forgot Password
                            <span className="menu-arrow inside-submenu"></span>
                          </a>
                          <ul>
                            <li>
                              <a href="https://dreamspos.dreamstechnologies.com/html/template/forgot-password.html">
                                Forgot Password
                              </a>
                            </li>
                            <li>
                              <a href="https://dreamspos.dreamstechnologies.com/html/template/otp.html">
                                OTP
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="https://dreamspos.dreamstechnologies.com/html/template/reset-password.html">
                            Reset Password
                          </a>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="sidebar-overlay" data-reff="#sidebar"></div>
        </div>
      </div>
      {/* Add any additional scripts or components here */}
    </div>
  );
};

export default SideNav;
