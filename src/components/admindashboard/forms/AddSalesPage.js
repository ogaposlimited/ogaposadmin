import React, { useState } from "react";
import axios from "axios";
import "./AddSale.css"; // Import the custom CSS file
import TopNav from "../TopNav";
import SideNav from "../SideNav";

const AddSalesPage = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [formData, setFormData] = useState({
    customerName: "",
    referenceId: "",
    date: "",
    transactionType: "",
    transactionAmount: "",
    amountPaid: "",
    interest: "",
    profit: "",
    paymentMethod: "",
    status: "",
    paymentStatus: "",
    posOperator: "",
    customerPhoneNo: "", // Added phone number
  });

  const handleSaveSale = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apiUrl}/api/sales/add`, formData);
      console.log("Sale added successfully:", response.data);
    } catch (error) {
      console.error("Error adding sale:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div>
        <body>
          <div class="main-wrapper">
            <TopNav />

            <SideNav />
            <div tabIndex="-1" role="dialog" aria-hidden="true">
              <div
                className="modal-dialog"
                role="document"
                style={{ maxWidth: "1000px" }} // Increased width
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Add New Sale</h5>
                    <button type="button" className="close" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={handleSaveSale}>
                      <div className="d-flex flex-wrap">
                        <div className="form-group col-md-6">
                          <label htmlFor="customerName">Customer Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="customerName"
                            name="customerName"
                            value={formData.customerName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="referenceId">Reference ID</label>
                          <input
                            type="text"
                            className="form-control"
                            id="referenceId"
                            name="referenceId"
                            value={formData.referenceId}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="date">Date</label>
                          <input
                            type="date"
                            className="form-control"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="transactionType">
                            Transaction Type
                          </label>
                          <select
                            className="form-control"
                            id="transactionType"
                            name="transactionType"
                            value={formData.transactionType}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select Type</option>
                            <option value="Withdrawal">Withdrawal</option>
                            <option value="Deposit">Deposit</option>
                            <option value="Transfer">Transfer</option>
                            <option value="Airtime">Airtime</option>
                            <option value="Data">Data</option>
                            <option value="Electricity">Electricity</option>
                            <option value="Ajo">Ajo</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="transactionAmount">
                            Transaction Amount
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="transactionAmount"
                            name="transactionAmount"
                            value={formData.transactionAmount}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="amountPaid">Amount Paid</label>
                          <input
                            type="number"
                            className="form-control"
                            id="amountPaid"
                            name="amountPaid"
                            value={formData.amountPaid}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="interest">Interest/Fees</label>
                          <input
                            type="number"
                            className="form-control"
                            id="interest"
                            name="interest"
                            value={formData.interest}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="profit">Profit</label>
                          <input
                            type="number"
                            className="form-control"
                            id="profit"
                            name="profit"
                            value={formData.profit}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="paymentMethod">Payment Method</label>
                          <select
                            className="form-control"
                            id="paymentMethod"
                            name="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select Method</option>
                            <option value="Cash">Cash</option>
                            <option value="Bank Transfer">Bank Transfer</option>
                            <option value="Card">Card</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="status">Status</label>
                          <select
                            className="form-control"
                            id="status"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select Status</option>
                            <option value="Completed">Completed</option>
                            <option value="Pending">Pending</option>
                            <option value="Canceled">Canceled</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="paymentStatus">Payment Status</label>
                          <select
                            className="form-control"
                            id="paymentStatus"
                            name="paymentStatus"
                            value={formData.paymentStatus}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select Payment Status</option>
                            <option value="Paid">Paid</option>
                            <option value="Pending">Pending</option>
                            <option value="Failed">Failed</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="posOperator">POS Operator</label>
                          <input
                            type="text"
                            className="form-control"
                            id="posOperator"
                            name="posOperator"
                            value={formData.posOperator}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="customerPhoneNo">
                            Customer Phone No
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="customerPhoneNo"
                            name="customerPhoneNo"
                            value={formData.customerPhoneNo}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="submit" className="btn btn-primary">
                          Save Sale
                        </button>
                        <button type="button" className="btn btn-secondary">
                          Close
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    </>
  );
};

export default AddSalesPage;
