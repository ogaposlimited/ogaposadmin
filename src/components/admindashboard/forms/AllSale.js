import { React, useEffect, useState } from "react";

import axios from "axios";
import TopNav from "../TopNav";
import SideNav from "../SideNav";
import { Link } from "react-router-dom";
import AddSale from "./AddSale";
import "./all.css";
import useFetch from "../../../hooks/useFetch";

const AllSale = () => {
  const { data, loading, error, reFetch } = useFetch("/student/JS1");
  const apiUrl = process.env.REACT_APP_API_URL.trim();
  const [anchorElMap, setAnchorElMap] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  const [selectedDateRange, setSelectedDateRange] = useState({
    start: "",
    end: "",
  });
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [selectedPaymentStatus, setSelectedPaymentStatus] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedSalesperson, setSelectedSalesperson] = useState("");
  const [amountRange, setAmountRange] = useState({ min: "", max: "" });
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleOpenMenu = (event, examId) => {
    setAnchorElMap((prev) => ({
      ...prev,
      [examId]: event.currentTarget,
    }));
  };
  const updateTableData = (newSales) => {
    // Logic to update the table with the new admin data
    console.log("Updating table with new admin:", newSales);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleSearch = () => {
    // Add your search logic here, such as filtering data based on search criteria
    console.log(
      "Searching for:",
      searchTerm,
      selectedDate,
      selectedCustomer,
      selectedStatus
    );
    // Call your fetch function or filter logic here
  };

  const handleAdvancedSearchToggle = () => {
    setShowAdvancedSearch(!showAdvancedSearch);
  };
  return (
    <div>
      <body>
        <div class="main-wrapper">
          <TopNav />

          <SideNav />

          <div class="page-wrapper">
            <div class="content">
              <div class="page-header">
                <div class="add-item d-flex">
                  <div class="page-title">
                    <h4>Sales List</h4>
                    <h6>Manage Your Sales</h6>
                  </div>
                </div>

                <div class="page-btn">
                  <a
                    className="force-mobile-button"
                    onClick={() => setShowModal(true)}
                  >
                    Add New Sales
                  </a>
                </div>
              </div>

              <div class="card table-list-card">
                <div class="card-body">
                  <div className="table-top">
                    <div className="search-set">
                      <div className="search-input">
                        <input
                          type="text"
                          placeholder="Search by Customer Name"
                          className="form-control"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-body pb-0">
                      <div className="row g-3">
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="input-blocks">
                            <label>Start Date</label>
                            <input
                              type="date"
                              className="form-control"
                              value={selectedDateRange.start}
                              onChange={(e) =>
                                setSelectedDateRange({
                                  ...selectedDateRange,
                                  start: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="input-blocks">
                            <label>End Date</label>
                            <input
                              type="date"
                              className="form-control"
                              value={selectedDateRange.end}
                              onChange={(e) =>
                                setSelectedDateRange({
                                  ...selectedDateRange,
                                  end: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 col-12">
                          <div className="input-blocks">
                            <label>Payment Method</label>
                            <select
                              className="form-select"
                              onChange={(e) =>
                                setSelectedPaymentMethod(e.target.value)
                              }
                              value={selectedPaymentMethod}
                            >
                              <option value="">Choose Payment Method</option>
                              <option value="Cash">Cash</option>
                              <option value="Transfer">Transfer</option>
                              <option value="Credit Card">Credit Card</option>
                              <option value="Mobile Payment">
                                Mobile Payment
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 col-12">
                          <div className="input-blocks">
                            <label>Payment Status</label>
                            <select
                              className="form-select"
                              onChange={(e) =>
                                setSelectedPaymentStatus(e.target.value)
                              }
                              value={selectedPaymentStatus}
                            >
                              <option value="">Choose Status</option>
                              <option value="Successful">Successful</option>
                              <option value="Pending">Pending</option>
                              <option value="Failed">Failed</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 col-12">
                          <div className="input-blocks">
                            <label>Product/Service</label>
                            <input
                              type="text"
                              placeholder="Enter Product/Service"
                              className="form-control"
                              value={selectedProduct}
                              onChange={(e) =>
                                setSelectedProduct(e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 col-12">
                          <div className="input-blocks">
                            <label>Salesperson</label>
                            <input
                              type="text"
                              placeholder="Enter Salesperson"
                              className="form-control"
                              value={selectedSalesperson}
                              onChange={(e) =>
                                setSelectedSalesperson(e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="input-blocks">
                            <label>Min Amount</label>
                            <input
                              type="number"
                              placeholder="Min"
                              className="form-control"
                              value={amountRange.min}
                              onChange={(e) =>
                                setAmountRange({
                                  ...amountRange,
                                  min: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="input-blocks">
                            <label>Max Amount</label>
                            <input
                              type="number"
                              placeholder="Max"
                              className="form-control"
                              value={amountRange.max}
                              onChange={(e) =>
                                setAmountRange({
                                  ...amountRange,
                                  max: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="table-responsive">
                    <table class="table  datanew">
                      <thead>
                        <tr>
                          <th class="no-sort">
                            <label class="checkboxs">
                              <input type="checkbox" id="select-all" />
                              <span class="checkmarks"></span>
                            </label>
                          </th>
                          <th>Customer Name</th>
                          <th>Ref ID</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th>Transaction Amount</th>
                          <th>Payment Method</th>
                          <th>Interest/Fee</th>
                          <th>Phone No</th>
                          <th>Paid</th>
                          <th>Transaction Type</th>
                          <th>Payment Status</th>
                          <th>Profit</th>
                          <th class="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody class="sales-list">
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>Thomas</td>
                          <td>SL0101</td>
                          <td>19 Jan 2023</td>
                          <td>
                            <span class="badge badge-bgsuccess">Completed</span>
                          </td>
                          <td>$550</td>
                          <td>$550</td>
                          <td>$0.00</td>
                          <td>
                            <span class="badge badge-linesuccess">Paid</span>
                          </td>
                          <td>Admin</td>
                          <td class="text-center">
                            <a
                              class="action-set"
                              href="javascript:void(0);"
                              data-bs-toggle="dropdown"
                              aria-expanded="true"
                            >
                              <i
                                class="fa fa-ellipsis-v"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#sales-details-new"
                                >
                                  <i data-feather="eye" class="info-img"></i>
                                  Sale Detail
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-sales-new"
                                >
                                  <i data-feather="edit" class="info-img"></i>
                                  Edit Sale
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#showpayment"
                                >
                                  <i
                                    data-feather="dollar-sign"
                                    class="info-img"
                                  ></i>
                                  Show Payments
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#createpayment"
                                >
                                  <i
                                    data-feather="plus-circle"
                                    class="info-img"
                                  ></i>
                                  Create Payment
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                >
                                  <i
                                    data-feather="download"
                                    class="info-img"
                                  ></i>
                                  Download pdf
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item confirm-text mb-0"
                                >
                                  <i
                                    data-feather="trash-2"
                                    class="info-img"
                                  ></i>
                                  Delete Sale
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>Rose</td>
                          <td>SL0102</td>
                          <td>26 Jan 2023</td>
                          <td>
                            <span class="badge badge-bgsuccess">Completed</span>
                          </td>
                          <td>$250</td>
                          <td>$250</td>
                          <td>$0.00</td>
                          <td>
                            <span class="badge badge-linesuccess">Paid</span>
                          </td>
                          <td>Admin</td>
                          <td class="text-center">
                            <a
                              class="action-set"
                              href="javascript:void(0);"
                              data-bs-toggle="dropdown"
                              aria-expanded="true"
                            >
                              <i
                                class="fa fa-ellipsis-v"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <a
                                  href="#"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#sales-details-new"
                                >
                                  <i data-feather="eye" class="info-img"></i>
                                  Sale Detail
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://dreamspos.dreamstechnologies.com/html/template/edit-sales.html"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-sales-new"
                                >
                                  <i data-feather="edit" class="info-img"></i>
                                  Edit Sale
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#showpayment"
                                >
                                  <i
                                    data-feather="dollar-sign"
                                    class="info-img"
                                  ></i>
                                  Show Payments
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#createpayment"
                                >
                                  <i
                                    data-feather="plus-circle"
                                    class="info-img"
                                  ></i>
                                  Create Payment
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                >
                                  <i
                                    data-feather="download"
                                    class="info-img"
                                  ></i>
                                  Download pdf
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item confirm-text mb-0"
                                >
                                  <i
                                    data-feather="trash-2"
                                    class="info-img"
                                  ></i>
                                  Delete Sale
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>Benjamin</td>
                          <td>SL0103</td>
                          <td>08 Feb 2023</td>
                          <td>
                            <span class="badge badge-bgsuccess">Completed</span>
                          </td>
                          <td>$570</td>
                          <td>$570</td>
                          <td>$0.00</td>
                          <td>
                            <span class="badge badge-linesuccess">Paid</span>
                          </td>
                          <td>Admin</td>
                          <td class="text-center">
                            <a
                              class="action-set"
                              href="javascript:void(0);"
                              data-bs-toggle="dropdown"
                              aria-expanded="true"
                            >
                              <i
                                class="fa fa-ellipsis-v"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <a
                                  href="#"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#sales-details-new"
                                >
                                  <i data-feather="eye" class="info-img"></i>
                                  Sale Detail
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://dreamspos.dreamstechnologies.com/html/template/edit-sales.html"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-sales-new"
                                >
                                  <i data-feather="edit" class="info-img"></i>
                                  Edit Sale
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#showpayment"
                                >
                                  <i
                                    data-feather="dollar-sign"
                                    class="info-img"
                                  ></i>
                                  Show Payments
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#createpayment"
                                >
                                  <i
                                    data-feather="plus-circle"
                                    class="info-img"
                                  ></i>
                                  Create Payment
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                >
                                  <i
                                    data-feather="download"
                                    class="info-img"
                                  ></i>
                                  Download pdf
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item confirm-text mb-0"
                                >
                                  <i
                                    data-feather="trash-2"
                                    class="info-img"
                                  ></i>
                                  Delete Sale
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>Lilly</td>
                          <td>SL0104</td>
                          <td>12 Feb 2023</td>
                          <td>
                            <span class="badge badge-bgdanger">Pending</span>
                          </td>
                          <td>$300</td>
                          <td>$0.00</td>
                          <td>$300</td>
                          <td>
                            <span class="badge badge-linedanger">Due</span>
                          </td>
                          <td>Admin</td>
                          <td class="text-center">
                            <a
                              class="action-set"
                              href="javascript:void(0);"
                              data-bs-toggle="dropdown"
                              aria-expanded="true"
                            >
                              <i
                                class="fa fa-ellipsis-v"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <a
                                  href="#"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#sales-details-new"
                                >
                                  <i data-feather="eye" class="info-img"></i>
                                  Sale Detail
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://dreamspos.dreamstechnologies.com/html/template/edit-sales.html"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-sales-new"
                                >
                                  <i data-feather="edit" class="info-img"></i>
                                  Edit Sale
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#showpayment"
                                >
                                  <i
                                    data-feather="dollar-sign"
                                    class="info-img"
                                  ></i>
                                  Show Payments
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#createpayment"
                                >
                                  <i
                                    data-feather="plus-circle"
                                    class="info-img"
                                  ></i>
                                  Create Payment
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                >
                                  <i
                                    data-feather="download"
                                    class="info-img"
                                  ></i>
                                  Download pdf
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item confirm-text mb-0"
                                >
                                  <i
                                    data-feather="trash-2"
                                    class="info-img"
                                  ></i>
                                  Delete Sale
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>Freda</td>
                          <td>SL0105</td>
                          <td>17 Mar 2023</td>
                          <td>
                            <span class="badge badge-bgdanger">Pending</span>
                          </td>
                          <td>$700</td>
                          <td>$0.00</td>
                          <td>$700</td>
                          <td>
                            <span class="badge badge-linedanger">Due</span>
                          </td>
                          <td>Admin</td>
                          <td class="text-center">
                            <a
                              class="action-set"
                              href="javascript:void(0);"
                              data-bs-toggle="dropdown"
                              aria-expanded="true"
                            >
                              <i
                                class="fa fa-ellipsis-v"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <a
                                  href="#"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#sales-details-new"
                                >
                                  <i data-feather="eye" class="info-img"></i>
                                  Sale Detail
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://dreamspos.dreamstechnologies.com/html/template/edit-sales.html"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-sales-new"
                                >
                                  <i data-feather="edit" class="info-img"></i>
                                  Edit Sale
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#showpayment"
                                >
                                  <i
                                    data-feather="dollar-sign"
                                    class="info-img"
                                  ></i>
                                  Show Payments
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#createpayment"
                                >
                                  <i
                                    data-feather="plus-circle"
                                    class="info-img"
                                  ></i>
                                  Create Payment
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                >
                                  <i
                                    data-feather="download"
                                    class="info-img"
                                  ></i>
                                  Download pdf
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item confirm-text mb-0"
                                >
                                  <i
                                    data-feather="trash-2"
                                    class="info-img"
                                  ></i>
                                  Delete Sale
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>Alwin</td>
                          <td>SL0106</td>
                          <td>24 Mar 2023</td>
                          <td>
                            <span class="badge badge-bgsuccess">Completed</span>
                          </td>
                          <td>$400</td>
                          <td>$400</td>
                          <td>$0.00</td>
                          <td>
                            <span class="badge badge-linesuccess">Paid</span>
                          </td>
                          <td>Admin</td>
                          <td class="text-center">
                            <a
                              class="action-set"
                              href="javascript:void(0);"
                              data-bs-toggle="dropdown"
                              aria-expanded="true"
                            >
                              <i
                                class="fa fa-ellipsis-v"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <a
                                  href="#"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#sales-details-new"
                                >
                                  <i data-feather="eye" class="info-img"></i>
                                  Sale Detail
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://dreamspos.dreamstechnologies.com/html/template/edit-sales.html"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-sales-new"
                                >
                                  <i data-feather="edit" class="info-img"></i>
                                  Edit Sale
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#showpayment"
                                >
                                  <i
                                    data-feather="dollar-sign"
                                    class="info-img"
                                  ></i>
                                  Show Payments
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#createpayment"
                                >
                                  <i
                                    data-feather="plus-circle"
                                    class="info-img"
                                  ></i>
                                  Create Payment
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                >
                                  <i
                                    data-feather="download"
                                    class="info-img"
                                  ></i>
                                  Download pdf
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item confirm-text mb-0"
                                >
                                  <i
                                    data-feather="trash-2"
                                    class="info-img"
                                  ></i>
                                  Delete Sale
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>Maybelle</td>
                          <td>SL0107</td>
                          <td>06 Apr 2023</td>
                          <td>
                            <span class="badge badge-bgdanger">Pending</span>
                          </td>
                          <td>$120</td>
                          <td>$0.00</td>
                          <td>$120</td>
                          <td>
                            <span class="badge badge-linedanger">Due</span>
                          </td>
                          <td>Admin</td>
                          <td class="text-center">
                            <a
                              class="action-set"
                              href="javascript:void(0);"
                              data-bs-toggle="dropdown"
                              aria-expanded="true"
                            >
                              <i
                                class="fa fa-ellipsis-v"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <a
                                  href="#"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#sales-details-new"
                                >
                                  <i data-feather="eye" class="info-img"></i>
                                  Sale Detail
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://dreamspos.dreamstechnologies.com/html/template/edit-sales.html"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-sales-new"
                                >
                                  <i data-feather="edit" class="info-img"></i>
                                  Edit Sale
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#showpayment"
                                >
                                  <i
                                    data-feather="dollar-sign"
                                    class="info-img"
                                  ></i>
                                  Show Payments
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#createpayment"
                                >
                                  <i
                                    data-feather="plus-circle"
                                    class="info-img"
                                  ></i>
                                  Create Payment
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                >
                                  <i
                                    data-feather="download"
                                    class="info-img"
                                  ></i>
                                  Download pdf
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item confirm-text mb-0"
                                >
                                  <i
                                    data-feather="trash-2"
                                    class="info-img"
                                  ></i>
                                  Delete Sale
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>Ellen</td>
                          <td>SL0108</td>
                          <td>16 Apr 2023</td>
                          <td>
                            <span class="badge badge-bgsuccess">Completed</span>
                          </td>
                          <td>$830</td>
                          <td>$830</td>
                          <td>$0.00</td>
                          <td>
                            <span class="badge badge-linesuccess">Paid</span>
                          </td>
                          <td>Admin</td>
                          <td class="text-center">
                            <a
                              class="action-set"
                              href="javascript:void(0);"
                              data-bs-toggle="dropdown"
                              aria-expanded="true"
                            >
                              <i
                                class="fa fa-ellipsis-v"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <a
                                  href="#"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#sales-details-new"
                                >
                                  <i data-feather="eye" class="info-img"></i>
                                  Sale Detail
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://dreamspos.dreamstechnologies.com/html/template/edit-sales.html"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-sales-new"
                                >
                                  <i data-feather="edit" class="info-img"></i>
                                  Edit Sale
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#showpayment"
                                >
                                  <i
                                    data-feather="dollar-sign"
                                    class="info-img"
                                  ></i>
                                  Show Payments
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#createpayment"
                                >
                                  <i
                                    data-feather="plus-circle"
                                    class="info-img"
                                  ></i>
                                  Create Payment
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                >
                                  <i
                                    data-feather="download"
                                    class="info-img"
                                  ></i>
                                  Download pdf
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item confirm-text mb-0"
                                >
                                  <i
                                    data-feather="trash-2"
                                    class="info-img"
                                  ></i>
                                  Delete Sale
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>Kaitlin</td>
                          <td>SL0109</td>
                          <td>04 May 2023</td>
                          <td>
                            <span class="badge badge-bgdanger">Pending</span>
                          </td>
                          <td>$800</td>
                          <td>$0.00</td>
                          <td>$800</td>
                          <td>
                            <span class="badge badge-linedanger">Due</span>
                          </td>
                          <td>Admin</td>
                          <td class="text-center">
                            <a
                              class="action-set"
                              href="javascript:void(0);"
                              data-bs-toggle="dropdown"
                              aria-expanded="true"
                            >
                              <i
                                class="fa fa-ellipsis-v"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <a
                                  href="#"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#sales-details-new"
                                >
                                  <i data-feather="eye" class="info-img"></i>
                                  Sale Detail
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://dreamspos.dreamstechnologies.com/html/template/edit-sales.html"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-sales-new"
                                >
                                  <i data-feather="edit" class="info-img"></i>
                                  Edit Sale
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#showpayment"
                                >
                                  <i
                                    data-feather="dollar-sign"
                                    class="info-img"
                                  ></i>
                                  Show Payments
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#createpayment"
                                >
                                  <i
                                    data-feather="plus-circle"
                                    class="info-img"
                                  ></i>
                                  Create Payment
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                >
                                  <i
                                    data-feather="download"
                                    class="info-img"
                                  ></i>
                                  Download pdf
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item confirm-text mb-0"
                                >
                                  <i
                                    data-feather="trash-2"
                                    class="info-img"
                                  ></i>
                                  Delete Sale
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>Grace</td>
                          <td>SL0110</td>
                          <td>29 May 2023</td>
                          <td>
                            <span class="badge badge-bgsuccess">Completed</span>
                          </td>
                          <td>$460</td>
                          <td>$460</td>
                          <td>$0.00</td>
                          <td>
                            <span class="badge badge-linesuccess">Paid</span>
                          </td>
                          <td>Admin</td>
                          <td class="text-center">
                            <a
                              class="action-set"
                              href="javascript:void(0);"
                              data-bs-toggle="dropdown"
                              aria-expanded="true"
                            >
                              <i
                                class="fa fa-ellipsis-v"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <a
                                  href="#"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#sales-details-new"
                                >
                                  <i data-feather="eye" class="info-img"></i>
                                  Sale Detail
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://dreamspos.dreamstechnologies.com/html/template/edit-sales.html"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-sales-new"
                                >
                                  <i data-feather="edit" class="info-img"></i>
                                  Edit Sale
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#showpayment"
                                >
                                  <i
                                    data-feather="dollar-sign"
                                    class="info-img"
                                  ></i>
                                  Show Payments
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#createpayment"
                                >
                                  <i
                                    data-feather="plus-circle"
                                    class="info-img"
                                  ></i>
                                  Create Payment
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                >
                                  <i
                                    data-feather="download"
                                    class="info-img"
                                  ></i>
                                  Download pdf
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item confirm-text mb-0"
                                >
                                  <i
                                    data-feather="trash-2"
                                    class="info-img"
                                  ></i>
                                  Delete Sale
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <AddSale
                      showModal={showModal}
                      setShowModal={setShowModal}
                      updateTableData={updateTableData}
                    />
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

export default AllSale;
