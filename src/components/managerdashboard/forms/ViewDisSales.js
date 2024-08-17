import { React, useEffect, useState } from "react";
import axios from "axios";
import TopNav from "../TopNav";
import SideNav from "../SideNav";
import { Link } from "react-router-dom";
import DisManager from "../admin/DisManager";
import DisSales from "./DisSales";
import useAuth from "../../hooks/useAuth";

const ViewDisSales = () => {
  const [showModal, setShowModal] = useState(false);
  const [disbursements, setDisbursements] = useState([]);

  const apiUrl = process.env.REACT_APP_API_URL;
  const { user } = useAuth(); // Access the authenticated user
  const managerId = user?._id; // Assuming user object contains _id or adjust based on your user structure

  useEffect(() => {
    const fetchDisbursements = async () => {
      try {
        if (!managerId) {
          throw new Error("No manager ID found");
        }

        const token = localStorage.getItem("jwtToken");

        const response = await axios.get(
          `${apiUrl}/api/disbursement/from-manager-to-sales`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setDisbursements(response.data.disbursements || []);
      } catch (error) {
        console.error("Error fetching disbursements:", error);
      }
    };

    fetchDisbursements();
  }, [apiUrl, managerId]);

  useEffect(() => {
    setDisbursements();
  }, []);

  const updateTableData = () => {
    setDisbursements(); // Refetch the data to ensure the table is updated
  };

  return (
    <div>
      <div className="main-wrapper">
        <TopNav />
        <SideNav />

        <div className="page-wrapper">
          <div className="content">
            <div className="page-header">
              <div className="add-item d-flex">
                <div className="page-title">
                  <h4>Sales Disbursement List</h4>
                </div>
              </div>
              <div className="page-btn">
                <Link
                  className="btn btn-added"
                  onClick={() => setShowModal(true)}
                >
                  <i data-feather="plus-circle" className="me-2"></i> Add New
                  Disbursement
                </Link>
              </div>
            </div>

            <div className="card table-list-card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table datanew">
                    <thead>
                      <tr>
                        <th className="no-sort">
                          <label className="checkboxs">
                            <input type="checkbox" id="select-all" />
                            <span className="checkmarks"></span>
                          </label>
                        </th>
                        <th>Sales Name</th>
                        <th>Total Disbursement</th>
                        <th>Date</th>
                        <th>Status</th> {/* New column for status */}
                        <th>Notes</th> {/* New column for notes */}
                      </tr>
                    </thead>
                    <tbody className="sales-list">
                      {Array.isArray(disbursements) &&
                      disbursements.length > 0 ? (
                        disbursements.map((disbursement) => (
                          <tr key={disbursement._id}>
                            <td>
                              <label className="checkboxs">
                                <input type="checkbox" />
                                <span className="checkmarks"></span>
                              </label>
                            </td>
                            <td>
                              {disbursement?.salesperson?.username || "N/A"}
                            </td>
                            <td>{disbursement?.amount}</td>
                            <td>
                              {new Date(
                                disbursement?.createdAt
                              ).toLocaleDateString()}
                            </td>
                            <td>{disbursement?.status}</td>{" "}
                            {/* Display status */}
                            <td>{disbursement?.notes}</td> {/* Display notes */}
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6" style={{ textAlign: "center" }}>
                            No disbursements found
                          </td>
                        </tr>
                      )}
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
    </div>
  );
};

export default ViewDisSales;
