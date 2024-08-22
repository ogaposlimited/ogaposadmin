import { React, useEffect, useState } from "react";
import axios from "axios";
import TopNav from "../TopNav";
import SideNav from "../SideNav";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import DisManager from "../admin/DisManager";
import "./all.css";
const ViewDisManager = () => {
  const [showModal, setShowModal] = useState(false);
  const [disbursements, setDisbursements] = useState([]);

  const apiUrl = process.env.REACT_APP_API_URL;

  const fetchDisbursement = async () => {
    const token = localStorage.getItem("jwtToken");

    try {
      const response = await axios.get(`${apiUrl}/api/disbursements`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Check if response is successful and contains the data array
      if (response.data && response.data.data) {
        setDisbursements(response.data.data); // Access the data array within the response
      } else {
        console.error("Error: Expected an array but got something else.");
      }
    } catch (error) {
      console.error("Error fetching disbursements:", error);
    }
  };

  useEffect(() => {
    fetchDisbursement();
  }, []);

  const updateTableData = () => {
    fetchDisbursement(); // Refetch the data to ensure the table is updated
  };
  const handleDelete = async (id, event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    try {
      await axios.delete(`${apiUrl}/api/disbursement/${id}`);
      setDisbursements(
        disbursements.filter((disbursement) => disbursement._id !== id)
      );
    } catch (error) {
      console.error("Error deleting point:", error);
    }
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
                  <h4>Manager Disbursement List</h4>
                </div>
              </div>
              <a
                className="force-mobile-button"
                onClick={() => setShowModal(true)}
              >
                Add New Disbursement
              </a>
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
                        <th>Manager Name</th>
                        <th>Total Disbursement</th>
                        <th>Date</th>
                        <th>Status</th> {/* New column for status */}
                        <th>Notes</th> {/* New column for notes */}
                        <th>Action</th> {/* New column for notes */}
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
                            <td>{disbursement?.manager?.username}</td>
                            <td>{disbursement?.amount}</td>
                            <td>
                              {new Date(
                                disbursement?.createdAt
                              ).toLocaleDateString()}
                            </td>
                            <td>{disbursement?.status}</td>{" "}
                            {/* Display status */}
                            <td>{disbursement?.notes}</td> {/* Display notes */}
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <a className="me-2 p-2" href="#">
                                  <FaEdit className="edit-icon" />
                                </a>
                                <a
                                  className="confirm-text p-2"
                                  onClick={(event) =>
                                    handleDelete(disbursement._id, event)
                                  }
                                >
                                  <FaTrash className="delete-icon" />
                                </a>
                              </div>
                            </td>
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
                  <DisManager
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

export default ViewDisManager;
