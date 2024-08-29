import { React, useEffect, useState } from "react";

import axios from "axios";
import TopNav from "../TopNav";
import SideNav from "../SideNav";
import { Link } from "react-router-dom";
import moment from "moment";
import AddSale from "./AddSale";
import "./all.css";
import useFetch from "../../../hooks/useFetch";
import useAuth from "../../hooks/useAuth";

const AllSale = () => {
  const { user } = useAuth(); // Access the authenticated user
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
  const apiUrl = process.env.REACT_APP_API_URL.trim();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [selectedPaymentStatus, setSelectedPaymentStatus] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedSalesperson, setSelectedSalesperson] = useState("");
  const [amountRange, setAmountRange] = useState({ min: "", max: "" });
  const [transactions, setTransactions] = useState([]);
  const [totalSales, setTotalSales] = useState(0); // State for total sales
  const [totalDailySales, setTotalDailySales] = useState(0); // State for total daily sales
  const [totalLast30DaysSales, setTotalLast30DaysSales] = useState(0); // State for total last 30 days sales
  const [totalWeeklySales, setTotalWeeklySales] = useState(0); // State for total weekly sales
  const [totalProfit, setTotalProfit] = useState(0); // State for total profit
  const [totalDailyProfit, setTotalDailyProfit] = useState(0); // State for total daily profit
  const [totalLast30DaysProfit, setTotalLast30DaysProfit] = useState(0); // State for total last 30 days profit
  const [totalWeeklyProfit, setTotalWeeklyProfit] = useState(0); // State for total weekly profit
  const [userCounts, setUserCounts] = useState({
    admin: 0,
    manager: 0,
    staff: 0,
  });
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

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        if (user && user.role === "admin") {
          const response = await axios.get(`${apiUrl}/api/cash/all`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming JWT is stored in localStorage
            },
          });
          console.log("API Response:", response.data);
          setTransactions(response.data);
          const today = moment().format("YYYY-MM-DD");
          const dailyTransactions = response.data.filter((transaction) => {
            const transactionDate = moment(transaction.date).format(
              "YYYY-MM-DD"
            );
            return transactionDate === today;
          });
          const thirtyDaysAgo = moment()
            .subtract(30, "days")
            .format("YYYY-MM-DD");

          // Calculate total daily sales
          const totalDailySalesAmount = dailyTransactions.reduce(
            (sum, transaction) => {
              return sum + transaction.transactionAmount;
            },
            0
          );
          setTotalDailySales(totalDailySalesAmount); // Set the total daily sales amount
          // Calculate total sales
          const total = response.data.reduce((sum, transaction) => {
            return sum + transaction.transactionAmount;
          }, 0);

          // Calculate total profit
          const totalProfitAmount = response.data.reduce((sum, transaction) => {
            return sum + transaction.profit;
          }, 0);

          setTotalSales(total); // Set the total sales amount
          setTotalProfit(totalProfitAmount);
          // Filter transactions within the last 30 days
          const last30DaysTransactions = response.data.filter((transaction) => {
            const transactionDate = moment(transaction.date).format(
              "YYYY-MM-DD"
            );
            return transactionDate >= thirtyDaysAgo && transactionDate <= today;
          });

          // Calculate total sales for the last 30 days
          const totalLast30DaysSalesAmount = last30DaysTransactions.reduce(
            (sum, transaction) => {
              return sum + transaction.transactionAmount;
            },
            0
          );

          setTotalLast30DaysSales(totalLast30DaysSalesAmount);

          // Calculate the date 7 days ago from today for weekly sales
          const sevenDaysAgo = moment()
            .subtract(7, "days")
            .format("YYYY-MM-DD");

          // Filter transactions within the last 7 days (weekly sales)
          const weeklyTransactions = response.data.filter((transaction) => {
            const transactionDate = moment(transaction.date).format(
              "YYYY-MM-DD"
            );
            return transactionDate >= sevenDaysAgo && transactionDate <= today;
          });
          // Calculate total sales for the last 7 days
          const totalWeeklySalesAmount = weeklyTransactions.reduce(
            (sum, transaction) => {
              return sum + transaction.transactionAmount;
            },
            0
          );

          setTotalWeeklySales(totalWeeklySalesAmount);
          // Calculate total profit for the last 30 days
          const totalLast30DaysProfitAmount = last30DaysTransactions.reduce(
            (sum, transaction) => {
              return sum + transaction.profit;
            },
            0
          );
          setTotalLast30DaysProfit(totalLast30DaysProfitAmount);
          // Calculate total daily profit
          const totalDailyProfitAmount = dailyTransactions.reduce(
            (sum, transaction) => {
              return sum + transaction.profit;
            },
            0
          );
          setTotalDailyProfit(totalDailyProfitAmount);
          // Calculate total weekly profit
          const totalWeeklyProfitAmount = weeklyTransactions.reduce(
            (sum, transaction) => {
              return sum + transaction.profit;
            },
            0
          );
          setTotalWeeklyProfit(totalWeeklyProfitAmount);
        }
      } catch (error) {
        console.error("Error fetching transactions", error);
      }
    };

    fetchTransactions();
  }, [user]);
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
                          <th>POS/Sales Operator</th>
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
                        </tr>
                      </thead>
                      <tbody className="sales-list">
                        {transactions.map((transaction) => (
                          <tr key={transaction._id}>
                            <td>
                              <label className="checkboxs">
                                <input type="checkbox" />
                                <span className="checkmarks"></span>
                              </label>
                            </td>
                            <td>
                              {transaction.posOperator
                                ? transaction.posOperator.username
                                : "N/A"}
                            </td>

                            <td>{transaction.customerName}</td>
                            <td>{transaction.referenceId}</td>
                            <td>
                              {new Date(transaction.date).toLocaleDateString()}
                            </td>
                            <td>
                              <span
                                className={`badge ${
                                  transaction.status === "Completed"
                                    ? "badge-bgsuccess"
                                    : "badge-bgfailure"
                                }`}
                              >
                                {transaction.status}
                              </span>
                            </td>
                            <td>₦{transaction.transactionAmount}</td>
                            <td>{transaction.paymentMethod}</td>
                            <td>₦{transaction.interest}</td>
                            <td>{transaction.customerPhoneNo}</td>
                            <td>{transaction.amountPaid}</td>
                            <td>{transaction.transactionType}</td>
                            <td>{transaction.paymentStatus}</td>
                            <td>₦{transaction.profit}</td>
                          </tr>
                        ))}
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

export default AllSale;
