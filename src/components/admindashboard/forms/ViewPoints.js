import React, { useEffect, useState } from "react";
import axios from "axios";
import TopNav from "../TopNav";
import SideNav from "../SideNav";
import "./point.css";
import "./all.css";
import { FaEdit, FaTrash } from "react-icons/fa";

import AddPointModal from "./AddPointModal";

const ViewPoints = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [points, setPoints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null); // State to track the selected user ID

  const apiUrl = process.env.REACT_APP_API_URL;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const fetchPoints = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/point`);
        setPoints(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching points data");
        setLoading(false);
      }
    };

    fetchPoints();
  }, [apiUrl]);

  const handleDelete = async (id, event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    try {
      await axios.delete(`${apiUrl}/api/point/${id}`);
      setPoints(points.filter((point) => point._id !== id));
    } catch (error) {
      console.error("Error deleting point:", error);
    }
  };

  const updateTableData = (newPoint) => {
    setPoints([...points, newPoint]);
  };

  if (error) return <div>{error}</div>;

  return (
    <div>
      <div className="main-wrapper">
        <TopNav />
        <SideNav />

        <div className="page-wrapper">
          <div className="content">
            <div className="card">
              <div className="card-header">
                <div className="header-container">
                  <h4 className="card-title">All POS Points</h4>
                  <a
                    className="force-mobile-button"
                    onClick={() => setShowModal(true)}
                  >
                    Add Point
                  </a>
                </div>
              </div>

              <div className="card-body">
                <div className="table-responsive dataview">
                  <table className="table dashboard-expired-products">
                    <thead>
                      <tr>
                        <th className="no-sort">
                          <label className="checkboxs">
                            <input type="checkbox" id="select-all" />
                            <span className="checkmarks"></span>
                          </label>
                        </th>
                        <th>Point Name</th>
                        <th>Point Address</th>
                        <th>POS Operator</th>
                        <th className="no-sort">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {points.map((point) => (
                        <tr key={point._id}>
                          <td>
                            <label className="checkboxs">
                              <input type="checkbox" />
                              <span className="checkmarks"></span>
                            </label>
                          </td>
                          <td>{point.pointname}</td>
                          <td>{point.address}</td>
                          <td>{point.posOperator}</td>
                          <td className="action-table-data">
                            <div className="edit-delete-action">
                              <a className="me-2 p-2" href="#">
                                <FaEdit className="edit-icon" />
                              </a>
                              <a
                                className="confirm-text p-2"
                                href="#"
                                onClick={(event) =>
                                  handleDelete(point._id, event)
                                }
                              >
                                <FaTrash className="delete-icon" />
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <AddPointModal
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

export default ViewPoints;
