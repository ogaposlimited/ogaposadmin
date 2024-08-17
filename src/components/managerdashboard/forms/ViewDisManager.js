// import { React, useEffect, useState } from "react";

// import axios from "axios";
// import TopNav from "../TopNav";
// import SideNav from "../SideNav";
// import { Link } from "react-router-dom";
// import AddSale from "./AddSale";
// import useFetch from "../../../hooks/useFetch";
// import DisManager from "../admin/DisManager";

// const ViewDisManager = () => {
//   // const { data, loading, error, reFetch } = useFetch("/student/JS1");
//   const apiUrl = process.env.REACT_APP_API_URL.trim();
//   const [anchorElMap, setAnchorElMap] = useState({});
//   const [searchTerm, setSearchTerm] = useState("");

//   const [showModal, setShowModal] = useState(false);
//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedCustomer, setSelectedCustomer] = useState("");
//   const [selectedStatus, setSelectedStatus] = useState("");
//   const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

//   const [selectedDateRange, setSelectedDateRange] = useState({
//     start: "",
//     end: "",
//   });
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
//   const [selectedPaymentStatus, setSelectedPaymentStatus] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState("");
//   const [selectedSalesperson, setSelectedSalesperson] = useState("");
//   const [amountRange, setAmountRange] = useState({ min: "", max: "" });
//   const [editDialogOpen, setEditDialogOpen] = useState(false);

//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const handleOpenMenu = (event, examId) => {
//     setAnchorElMap((prev) => ({
//       ...prev,
//       [examId]: event.currentTarget,
//     }));
//   };
//   const updateTableData = (newSales) => {
//     // Logic to update the table with the new admin data
//     console.log("Updating table with new admin:", newSales);
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };
//   const handleSearch = () => {
//     // Add your search logic here, such as filtering data based on search criteria
//     console.log(
//       "Searching for:",
//       searchTerm,
//       selectedDate,
//       selectedCustomer,
//       selectedStatus
//     );
//     // Call your fetch function or filter logic here
//   };

//   const handleAdvancedSearchToggle = () => {
//     setShowAdvancedSearch(!showAdvancedSearch);
//   };

//   const handleApprove = async (disbursementId) => {
//     try {
//       const response = await axios.put(
//         `${apiUrl}/disbursements/${disbursementId}/approve`
//       );
//       if (response.status === 200) {
//         alert("Disbursement approved successfully");
//         reFetch(); // Re-fetch the disbursement data to update the table
//       }
//     } catch (error) {
//       console.error("Error approving disbursement:", error);
//     }
//   };

//   return (
//     <div>
//       <body>
//         <div class="main-wrapper">
//           <TopNav />

//           <SideNav />

//           <div class="page-wrapper">
//             <div class="content">
//               <div class="page-header">
//                 <div class="add-item d-flex">
//                   <div class="page-title">
//                     <h4>Manager Disbursement List</h4>
//                   </div>
//                 </div>
//               </div>

//               <div class="card table-list-card">
//                 <div class="card-body">
//                   <div class="table-responsive">
//                     <table class="table  datanew">
//                       <thead>
//                         <tr>
//                           <th class="no-sort">
//                             <label class="checkboxs">
//                               <input type="checkbox" id="select-all" />
//                               <span class="checkmarks"></span>
//                             </label>
//                           </th>
//                           <th>Manager Name</th>
//                           <th>Total Disbursement</th>
//                           <th>Date</th>
//                         </tr>
//                       </thead>
//                       <tbody className="sales-list">
//                         {data.map((disbursement) => (
//                           <tr key={disbursement._id}>
//                             <td>
//                               <label className="checkboxs">
//                                 <input type="checkbox" />
//                                 <span className="checkmarks"></span>
//                               </label>
//                             </td>
//                             <td>{disbursement.managerName}</td>
//                             <td>{disbursement.totalDisbursement}</td>
//                             <td>
//                               {new Date(disbursement.date).toLocaleDateString()}
//                             </td>
//                             <td>
//                               <button
//                                 className="btn btn-success"
//                                 onClick={() => handleApprove(disbursement._id)}
//                                 disabled={disbursement.status === "approved"}
//                               >
//                                 {disbursement.status === "approved"
//                                   ? "Approved"
//                                   : "Approve"}
//                               </button>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                     <DisManager
//                       showModal={showModal}
//                       setShowModal={setShowModal}
//                       updateTableData={updateTableData}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </body>
//     </div>
//   );
// };

// // export default ViewDisManager;
// import { React, useEffect, useState } from "react";
// import axios from "axios";
// import TopNav from "../TopNav";
// import SideNav from "../SideNav";
// import DisManager from "../admin/DisManager";

// const ViewDisManager = () => {
//   const apiUrl = process.env.REACT_APP_API_URL.trim();
//   const [disbursements, setDisbursements] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//   // Fetch disbursements when the component mounts
//   // useEffect(() => {
//   //   const fetchDisbursements = async () => {
//   //     try {
//   //       const response = await axios.get(`${apiUrl}/api/disbursements`);
//   //       setDisbursements(response.data);
//   //     } catch (error) {
//   //       console.error("Error fetching disbursements:", error);
//   //     }
//   //   };

//   //   fetchDisbursements();
//   // }, [apiUrl]);

//   useEffect(() => {
//     const fetchDisbursements = async () => {
//       try {
//         const token = localStorage.getItem("jwtToken"); // Retrieve token from storage
//         const response = await axios.get(`${apiUrl}/api/disbursements`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setDisbursements(response.data);
//       } catch (error) {
//         console.error("Error fetching disbursements:", error);
//       }
//     };

//     fetchDisbursements();
//   }, [apiUrl]);

//   // Function to handle approving a disbursement
//   const handleApprove = async (disbursementId) => {
//     try {
//       const response = await axios.put(
//         `${apiUrl}/disbursements/${disbursementId}/approve`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("jwtToken")}`, // Replace with actual token retrieval method
//           },
//         }
//       );
//       if (response.status === 200) {
//         alert("Disbursement approved successfully");
//         // Refetch disbursements after approval
//         const updatedResponse = await axios.get(`${apiUrl}/disbursements`);
//         setDisbursements(updatedResponse.data);
//       }
//     } catch (error) {
//       console.error("Error approving disbursement:", error);
//     }
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
//                         <th>Status</th>
//                         <th>Action</th>
//                       </tr>
//                     </thead>
//                     <tbody className="sales-list">
//                       {disbursements?.map((disbursement) => (
//                         <tr key={disbursement._id}>
//                           <td>
//                             <label className="checkboxs">
//                               <input type="checkbox" />
//                               <span className="checkmarks"></span>
//                             </label>
//                           </td>
//                           <td>{disbursement?.managerName}</td>
//                           <td>{disbursement?.totalDisbursement}</td>
//                           <td>
//                             {new Date(disbursement?.date).toLocaleDateString()}
//                           </td>
//                           <td>{disbursement?.status}</td>
//                           <td>
//                             <button
//                               className="btn btn-success"
//                               onClick={() => handleApprove(disbursement._id)}
//                               disabled={disbursement.status === "approved"}
//                             >
//                               {disbursement.status === "approved"
//                                 ? "Approved"
//                                 : "Approve"}
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                   <DisManager
//                     showModal={showModal}
//                     setShowModal={setShowModal}
//                     updateTableData={() => {}}
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

import React, { useEffect, useState } from "react";
import axios from "axios";

import TopNav from "../TopNav";
import SideNav from "../SideNav";
import DisManager from "../admin/DisManager";
import useAuth from "../../hooks/useAuth";

const ViewDisManager = () => {
  const apiUrl = process.env.REACT_APP_API_URL.trim();
  const [disbursements, setDisbursements] = useState([]);
  const [showModal, setShowModal] = useState(false);

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
          `${apiUrl}/api/disbursements/${managerId}`,
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

  const handleApprove = async (disbursementId) => {
    try {
      const token = localStorage.getItem("jwtToken");

      if (!token || !managerId) {
        throw new Error("Token or manager ID missing");
      }

      const response = await axios.put(
        `${apiUrl}/api/disbursements/${disbursementId}/approve`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert("Disbursement approved successfully");
        const updatedResponse = await axios.get(
          `${apiUrl}/api/disbursements/${managerId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setDisbursements(updatedResponse.data.disbursements || []);
      }
    } catch (error) {
      console.error("Error approving disbursement:", error);
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
                        <th>Status</th>
                        <th>Notes</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody className="sales-list">
                      {disbursements?.map((disbursement) => (
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
                              disbursement?.allocatedDate
                            ).toLocaleDateString()}
                          </td>
                          <td>{disbursement?.status}</td>
                          <td>{disbursement?.notes}</td>
                          <td>
                            <button
                              className="btn btn-success"
                              onClick={() => handleApprove(disbursement._id)}
                              disabled={disbursement.status === "approved"}
                            >
                              {disbursement.status === "approved"
                                ? "Approved"
                                : "Approve"}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <DisManager
                    showModal={showModal}
                    setShowModal={setShowModal}
                    updateTableData={() => {}}
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
