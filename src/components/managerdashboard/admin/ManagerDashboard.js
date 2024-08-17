import { React, useEffect, useState } from "react";
// import useFetch from "hooks/useFetch";
import logo from "./oga4.png";
import axios from "axios";
import TopNav from "../TopNav";
import SideNav from "../SideNav";
import Sidebars from "../Sidebars";
import { FaEdit, FaTrash } from "react-icons/fa";

const ManagerDashboard = () => {
  return (
    <div>
      <body>
        <div class="main-wrapper">
          <SideNav />
          <TopNav />

          <div class="page-wrapper">
            <div class="content">
              <div class="row">
                <div class="col-xl-3 col-sm-6 col-12 d-flex">
                  <div class="dash-count">
                    <div class="dash-counts">
                      <h4>1</h4>
                      <h5>Admin</h5>
                    </div>
                    <div class="dash-imgs">
                      <i data-feather="user"></i>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12 d-flex">
                  <div class="dash-count das1">
                    <div class="dash-counts">
                      <h4>3</h4>
                      <h5>Manager</h5>
                    </div>
                    <div class="dash-imgs">
                      <i data-feather="user-check"></i>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12 d-flex">
                  <div class="dash-count das2">
                    <div class="dash-counts">
                      <h4>10</h4>
                      <h5>Staff(POS workers)</h5>
                    </div>
                    <div class="dash-imgs">
                      <i data-feather="user"></i>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12 d-flex">
                  <div class="dash-count das3">
                    <div class="dash-counts">
                      <h4>17</h4>
                      <h5> Invoice</h5>
                    </div>
                    <div class="dash-imgs">
                      <i data-feather="file"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-xl-7 col-sm-12 col-12 d-flex">
                  <div class="card flex-fill">
                    <div class="card-header d-flex justify-content-between align-items-center">
                      <h5 class="card-title mb-0">Purchase & Sales</h5>
                      <div class="graph-sets">
                        <ul class="mb-0">
                          <li>
                            <span>Sales</span>
                          </li>
                          <li>
                            <span>Purchase</span>
                          </li>
                        </ul>
                        <div class="dropdown dropdown-wraper">
                          <button
                            class="btn btn-light btn-sm dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            2023
                          </button>
                          <ul
                            class="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item"
                              >
                                2023
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item"
                              >
                                2022
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item"
                              >
                                2021
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <div id="sales_charts"></div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-5 col-sm-12 col-12 d-flex">
                  <div class="card flex-fill default-cover mb-4">
                    <div class="card-header d-flex justify-content-between align-items-center">
                      <h4 class="card-title mb-0">
                        Total Pos Point Transactions
                      </h4>
                      <div class="view-all-link">
                        <a
                          href="javascript:void(0);"
                          class="view-all d-flex align-items-center"
                        >
                          View All
                          <span class="ps-2 d-flex align-items-center">
                            <i
                              data-feather="arrow-right"
                              class="feather-16"
                            ></i>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="table-responsive dataview">
                        <table class="table dashboard-recent-products">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Points</th>
                              <th>Total Sales</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td class="productimgname">
                                <a href="https://dreamspos.dreamstechnologies.com/html/template/product-list.html">
                                  Point 1(Ogba)
                                </a>
                              </td>
                              <td>12,500</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td class="productimgname">
                                <a href="https://dreamspos.dreamstechnologies.com/html/template/product-list.html">
                                  Point 2(Ogba)
                                </a>
                              </td>
                              <td>$1600</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td class="productimgname">
                                <a href="https://dreamspos.dreamstechnologies.com/html/template/product-list.html">
                                  Point 3(Ogba)
                                </a>
                              </td>
                              <td>$2000</td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td class="productimgname">
                                <a href="https://dreamspos.dreamstechnologies.com/html/template/product-list.html">
                                  Point 4(Ogba)
                                </a>
                              </td>
                              <td>$800</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Recent Transactions</h4>
                </div>
                <div class="card-body">
                  <div class="table-responsive dataview">
                    <table class="table dashboard-expired-products">
                      <thead>
                        <tr>
                          <th class="no-sort">
                            <label class="checkboxs">
                              <input type="checkbox" id="select-all" />
                              <span class="checkmarks"></span>
                            </label>
                          </th>
                          <th>Transactions</th>
                          <th>Time/Date</th>
                          <th> Amount</th>
                          <th> Point</th>
                          <th class="no-sort">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="productimgname">
                              <a href="javascript:void(0);">
                                Red Premium Handy{" "}
                              </a>
                            </div>
                          </td>
                          <td>
                            <a href="javascript:void(0);">PT006</a>
                          </td>
                          <td>17 Jan 2023</td>
                          <td>29 Mar 2023</td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a class="me-2 p-2" href="#">
                                <FaEdit className="edit-icon" />
                              </a>
                              <a
                                class=" confirm-text p-2"
                                href="javascript:void(0);"
                              >
                                <FaTrash className="delete-icon" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="productimgname">
                              <a href="javascript:void(0);">Iphone 14 Pro</a>
                            </div>
                          </td>
                          <td>
                            <a href="javascript:void(0);">PT007</a>
                          </td>
                          <td>22 Feb 2023</td>
                          <td>04 Apr 2023</td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a class="me-2 p-2" href="#">
                                <i data-feather="edit" class="feather-edit"></i>
                              </a>
                              <a
                                class="confirm-text p-2"
                                href="javascript:void(0);"
                              >
                                <i
                                  data-feather="trash-2"
                                  class="feather-trash-2"
                                ></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="productimgname">
                              <a href="javascript:void(0);">Black Slim 200 </a>
                            </div>
                          </td>
                          <td>
                            <a href="javascript:void(0);">PT008</a>
                          </td>
                          <td>18 Mar 2023</td>
                          <td>13 May 2023</td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a class="me-2 p-2" href="#">
                                <i data-feather="edit" class="feather-edit"></i>
                              </a>
                              <a
                                class=" confirm-text p-2"
                                href="javascript:void(0);"
                              >
                                <i
                                  data-feather="trash-2"
                                  class="feather-trash-2"
                                ></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="productimgname">
                              <a href="javascript:void(0);">Woodcraft Sandal</a>
                            </div>
                          </td>
                          <td>
                            <a href="javascript:void(0);">PT009</a>
                          </td>
                          <td>29 Mar 2023</td>
                          <td>27 May 2023</td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a class="me-2 p-2" href="#">
                                <i data-feather="edit" class="feather-edit"></i>
                              </a>
                              <a
                                class=" confirm-text p-2"
                                href="javascript:void(0);"
                              >
                                <i
                                  data-feather="trash-2"
                                  class="feather-trash-2"
                                ></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="productimgname">
                              <a href="javascript:void(0);">
                                Apple Series 5 Watch{" "}
                              </a>
                            </div>
                          </td>
                          <td>
                            <a href="javascript:void(0);">PT010</a>
                          </td>
                          <td>24 Mar 2023</td>
                          <td>26 May 2023</td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a
                                class="me-2 p-2"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#edit-units"
                              >
                                <i data-feather="edit" class="feather-edit"></i>
                              </a>
                              <a
                                class=" confirm-text p-2"
                                href="javascript:void(0);"
                              >
                                <i
                                  data-feather="trash-2"
                                  class="feather-trash-2"
                                ></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default ManagerDashboard;
