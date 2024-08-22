// import { React, useEffect, useState } from "react";
// import axios from "axios";
// import TopNav from "../TopNav";
// import SideNav from "../SideNav";
// import { Link } from "react-router-dom";
// import AddSale from "./AddSale";
// import useFetch from "../../../hooks/useFetch";
// import DisManager from "../admin/DisManager";

// const ViewDisManager = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [disbursements, setDisbursements] = useState([]);

//   // const toggleSidebar = () => {
//   //   setIsSidebarOpen(!isSidebarOpen);
//   // };
//   const apiUrl = process.env.REACT_APP_API_URL;

//   // Function to fetch all users with the admin role
//   // const fetchDisbursement = async () => {
//   //   try {
//   //     const response = await axios.get(`${apiUrl}/api/disbursements`);
//   //     setDisbursements(response.data);
//   //   } catch (error) {
//   //     console.error("Error fetching admins:", error);
//   //   }
//   // };
//   const fetchDisbursement = async () => {
//     // Retrieve the JWT token from localStorage
//     const token = localStorage.getItem("jwtToken");
//     console.log("Retrieved token:", token);

//     try {
//       const response = await axios.get(`${apiUrl}/api/disbursements`, {
//         headers: {
//           Authorization: `Bearer ${token}`, // Include the JWT token in the Authorization header
//         },
//       });
//       setDisbursements(response.data);
//     } catch (error) {
//       console.error("Error fetching disbursements:", error);
//     }
//   };

//   // Fetch data on component mount
//   useEffect(() => {
//     fetchDisbursement();
//   }, []);

//   // Update table data after adding a new admin
//   const updateTableData = () => {
//     fetchDisbursement(); // Refetch the data to ensure the table is updated
//   };

//   return (
//     <div>
//       <div class="main-wrapper">
//         <TopNav />
//         <SideNav />

//         <div class="page-wrapper">
//           <div class="content">
//             <div class="page-header">
//               <div class="add-item d-flex">
//                 <div class="page-title">
//                   <h4>Manager Disbursement List</h4>
//                 </div>
//               </div>
//               <div class="page-btn">
//                 <Link class="btn btn-added" onClick={() => setShowModal(true)}>
//                   <i data-feather="plus-circle" class="me-2"></i> Add New
//                   Disbursement
//                 </Link>
//               </div>
//             </div>

//             <div class="card table-list-card">
//               <div class="card-body">
//                 <div class="table-responsive">
//                   <table class="table datanew">
//                     <thead>
//                       <tr>
//                         <th class="no-sort">
//                           <label class="checkboxs">
//                             <input type="checkbox" id="select-all" />
//                             <span class="checkmarks"></span>
//                           </label>
//                         </th>
//                         <th>Manager Name</th>
//                         <th>Total Disbursement</th>
//                         <th>Date</th>
//                       </tr>
//                     </thead>
//                     <tbody class="sales-list">
//                       {disbursements.map((disbursement) => (
//                         <tr key={disbursement._id}>
//                           <td>
//                             <label class="checkboxs">
//                               <input type="checkbox" />
//                               <span class="checkmarks"></span>
//                             </label>
//                           </td>
//                           <td>{disbursement?.manager.username}</td>
//                           <td>{disbursement?.amount}</td>
//                           <td>
//                             {new Date(
//                               disbursement?.createdAt
//                             ).toLocaleDateString()}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                   <DisManager
//                     showModal={showModal}
//                     setShowModal={setShowModal}
//                     updateTableData={updateTableData}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default ViewDisManager;
// import { React, useEffect, useState } from "react";
// import axios from "axios";
// import TopNav from "../TopNav";
// import SideNav from "../SideNav";
// import { Link } from "react-router-dom";
// import DisManager from "../admin/DisManager";

// const ViewDisManager = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [disbursements, setDisbursements] = useState([]);

//   const apiUrl = process.env.REACT_APP_API_URL;

//   const fetchDisbursement = async () => {
//     const token = localStorage.getItem("jwtToken");
//     console.log("Retrieved token:", token);

//     try {
//       const response = await axios.get(`${apiUrl}/api/disbursements`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       // Check if response is successful and contains the data array
//       if (response.data && response.data.data) {
//         setDisbursements(response.data.data); // Access the data array within the response
//       } else {
//         console.error("Error: Expected an array but got something else.");
//       }
//     } catch (error) {
//       console.error("Error fetching disbursements:", error);
//     }
//   };

//   useEffect(() => {
//     fetchDisbursement();
//   }, []);

//   const updateTableData = () => {
//     fetchDisbursement(); // Refetch the data to ensure the table is updated
//   };

//   return (
//     <div>
//       <div className="main-wrapper">
//         <TopNav />
//         <SideNav />

//         <div className="page-wrapper">
//           <div className="content">
//             <div className="page-header">
//               <div className="add-item d-flex">
//                 <div className="page-title">
//                   <h4>Manager Disbursement List</h4>
//                 </div>
//               </div>
//               <div className="page-btn">
//                 <Link
//                   className="btn btn-added"
//                   onClick={() => setShowModal(true)}
//                 >
//                   <i data-feather="plus-circle" className="me-2"></i> Add New
//                   Disbursement
//                 </Link>
//               </div>
//             </div>

//             <div className="card table-list-card">
//               <div className="card-body">
//                 <div className="table-responsive">
//                   <table className="table datanew">
//                     <thead>
//                       <tr>
//                         <th className="no-sort">
//                           <label className="checkboxs">
//                             <input type="checkbox" id="select-all" />
//                             <span className="checkmarks"></span>
//                           </label>
//                         </th>
//                         <th>Manager Name</th>
//                         <th>Total Disbursement</th>
//                         <th>Date</th>
//                       </tr>
//                     </thead>
//                     <tbody className="sales-list">
//                       {Array.isArray(disbursements) &&
//                       disbursements.length > 0 ? (
//                         disbursements.map((disbursement) => (
//                           <tr key={disbursement._id}>
//                             <td>
//                               <label className="checkboxs">
//                                 <input type="checkbox" />
//                                 <span className="checkmarks"></span>
//                               </label>
//                             </td>
//                             <td>{disbursement?.manager.username}</td>
//                             <td>{disbursement?.amount}</td>
//                             <td>
//                               {new Date(
//                                 disbursement?.createdAt
//                               ).toLocaleDateString()}
//                             </td>
//                           </tr>
//                         ))
//                       ) : (
//                         <tr>
//                           <td colSpan="4" style={{ textAlign: "center" }}>
//                             No disbursements found
//                           </td>
//                         </tr>
//                       )}
//                     </tbody>
//                   </table>
//                   <DisManager
//                     showModal={showModal}
//                     setShowModal={setShowModal}
//                     updateTableData={updateTableData}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewDisManager;

import { React, useEffect, useState } from "react";
import axios from "axios";
import TopNav from "../TopNav";
import SideNav from "../SideNav";
import { Link } from "react-router-dom";
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
