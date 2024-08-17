// import { React, useEffect, useState } from "react";
// // import useFetch from "hooks/useFetch";
// import logo from "./oga4.png";
// import axios from "axios";
// import TopNav from "../TopNav";
// import SideNav from "../SideNav";
// import "./admin.css";
// import AddAdminModal from "./AddAdminModal";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import AddSalesModal from "./AddSalesModal";
// const ViewSalesUsers = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [admins, setAdmins] = useState([]);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };
//   const apiUrl = process.env.REACT_APP_API_URL;

//   // Fetch all users with the admin role
//   useEffect(() => {
//     const fetchAdmins = async () => {
//       try {
//         const response = await axios.get(`${apiUrl}/api/get-sales`); // Replace with your actual API endpoint
//         setAdmins(response.data);
//       } catch (error) {
//         console.error("Error fetching admins:", error);
//       }
//     };

//     fetchAdmins();
//   }, []);

//   const updateTableData = (newAdmin) => {
//     setAdmins([...admins, newAdmin]);
//   };

//   return (
//     <div>
//       <body>
//         <div class="main-wrapper">
//           <TopNav />

//           <SideNav />

//           <div class="page-wrapper">
//             <div class="content">
//               <div class="card">
//                 <div class="card-header">
//                   <div className="header-container">
//                     <h4 className="card-title">All POS operators</h4>
//                     <button
//                       className="add-admin-btn"
//                       onClick={() => setShowModal(true)}
//                     >
//                       Add POS operators
//                     </button>
//                   </div>
//                 </div>

//                 <div className="card-body">
//                   <div className="table-responsive dataview">
//                     <table className="table dashboard-expired-products">
//                       <thead>
//                         <tr>
//                           <th className="no-sort">
//                             <label className="checkboxs">
//                               <input type="checkbox" id="select-all" />
//                               <span className="checkmarks"></span>
//                             </label>
//                           </th>
//                           <th>Name</th>
//                           <th>Email</th>
//                           <th>Phone No</th>
//                           <th>Address</th>
//                           <th>Point</th>
//                           <th className="no-sort">Action</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {admins.map((admin, index) => (
//                           <tr key={index}>
//                             <td>
//                               <label className="checkboxs">
//                                 <input type="checkbox" />
//                                 <span className="checkmarks"></span>
//                               </label>
//                             </td>
//                             <td>{admin?.username}</td>
//                             <td>{admin?.email}</td>
//                             <td>{admin?.phone}</td>
//                             <td>{admin?.personaladdress}</td>
//                             <td>
//                               {admin?.managedPoints
//                                 ?.map((point) => point.pointname)
//                                 .join(", ")}
//                             </td>
//                             <td className="action-table-data">
//                               <div className="edit-delete-action">
//                                 <a className="me-2 p-2" href="#">
//                                   <FaEdit className="edit-icon" />
//                                 </a>
//                                 <a
//                                   className="confirm-text p-2"
//                                   href="javascript:void(0);"
//                                 >
//                                   <FaTrash className="delete-icon" />
//                                 </a>
//                               </div>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                     <AddSalesModal
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

// export default ViewSalesUsers;

import { React, useEffect, useState } from "react";
import axios from "axios";
import TopNav from "../TopNav";
import SideNav from "../SideNav";
import "./admin.css";
import AddSalesModal from "./AddSalesModal";
import { FaEdit, FaTrash } from "react-icons/fa";

const ViewSalesUsers = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [admins, setAdmins] = useState([]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const apiUrl = process.env.REACT_APP_API_URL;

  // Function to fetch all users with the admin role
  const fetchAdmins = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/get-sales`);
      setAdmins(response.data);
    } catch (error) {
      console.error("Error fetching admins:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchAdmins();
  }, []);

  // Update table data after adding a new admin
  const updateTableData = () => {
    fetchAdmins(); // Refetch the data to ensure the table is updated
  };

  return (
    <div>
      <body>
        <div className="main-wrapper">
          <TopNav />

          <SideNav />

          <div className="page-wrapper">
            <div className="content">
              <div className="card">
                <div className="card-header">
                  <div className="header-container">
                    <h4 className="card-title">All POS operators</h4>
                    <button
                      className="add-admin-btn"
                      onClick={() => setShowModal(true)}
                    >
                      Add POS operators
                    </button>
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
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone No</th>
                          <th>Address</th>
                          <th>Point</th>
                          <th className="no-sort">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {admins.map((admin, index) => (
                          <tr key={index}>
                            <td>
                              <label className="checkboxs">
                                <input type="checkbox" />
                                <span className="checkmarks"></span>
                              </label>
                            </td>
                            <td>{admin?.username}</td>
                            <td>{admin?.email}</td>
                            <td>{admin?.phone}</td>
                            <td>{admin?.personaladdress}</td>
                            <td>
                              {admin?.managedPoints
                                ?.map((point) => point.pointname)
                                .join(", ")}
                            </td>
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <a className="me-2 p-2" href="#">
                                  <FaEdit className="edit-icon" />
                                </a>
                                <a
                                  className="confirm-text p-2"
                                  href="javascript:void(0);"
                                >
                                  <FaTrash className="delete-icon" />
                                </a>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <AddSalesModal
                      showModal={showModal}
                      setShowModal={setShowModal}
                      updateTableData={updateTableData} // Pass updateTableData to the modal
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

export default ViewSalesUsers;
