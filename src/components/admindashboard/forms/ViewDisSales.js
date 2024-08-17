import { React, useEffect, useState } from "react";

import axios from "axios";
import TopNav from "../TopNav";
import SideNav from "../SideNav";
import { Link } from "react-router-dom";
import AddSale from "./AddSale";
import useFetch from "../../../hooks/useFetch";
import DisManager from "../admin/DisManager";
import DisSales from "../admin/DisSales";

const ViewDisSales = () => {
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
                    <h4>Sales Disbursement List</h4>
                  </div>
                </div>

                <div class="page-btn">
                  <Link
                    class="btn btn-added"
                    onClick={() => setShowModal(true)}
                  >
                    <i data-feather="plus-circle" class="me-2"></i> Add New
                    Disbursement
                  </Link>
                </div>
              </div>

              <div class="card table-list-card">
                <div class="card-body">
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
                          <th>Manager Name</th>
                          <th>Total Disbursement</th>
                          <th>Date</th>
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
                        </tr>
                      </tbody>
                    </table>
                    <DisSales
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

export default ViewDisSales;
