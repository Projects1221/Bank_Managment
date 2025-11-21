import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserNavbar from "./UserNavbar";
import { useNavigate } from "react-router-dom";

export default function UserDashboard() {
  const navigate = useNavigate();
  return (
    <>
  <UserNavbar/>
    <div className="container my-4">

      {/* Account Summary */}
      <div className="row g-3">
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h6 className="text-muted">Savings Account</h6>
              <h4 className="fw-bold">₹ 58,240</h4>
              <p className="small text-muted mb-0">A/C: 1234 XXXX 5678</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h6 className="text-muted">Current Account</h6>
              <h4 className="fw-bold">₹ 1,90,500</h4>
              <p className="small text-muted mb-0">A/C: 9876 XXXX 4321</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-4">
        <h5>Quick Actions</h5>
        <div className="d-flex gap-3 flex-wrap">
          <button className="btn btn-primary shadow-sm"><i className="fas fa-exchange-alt"></i> Transfer Money</button>
          <button className="btn btn-success shadow-sm"><i className="fas fa-file-download"></i> Download Statement</button>
          <button className="btn btn-secondary shadow-sm"><i className="fas fa-user-plus"></i> Add Beneficiary</button>
          <button className="btn btn-warning shadow-sm" onClick={() => navigate("/account-req")}><i className="fas fa-user-plus"></i> New Account Request 👤➕</button>
      </div>
      </div>

      {/* Recent Transactions */}
      <div className="mt-4">
        <h5>Recent Transactions</h5>
        <table className="table table-striped table-hover shadow-sm bg-white">
          <thead className="table-primary">
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>15 Nov</td><td>Amazon Purchase</td><td>-₹1200</td><td>Debit</td></tr>
            <tr><td>14 Nov</td><td>Salary</td><td>+₹25,000</td><td>Credit</td></tr>
          </tbody>
        </table>
      </div>

    </div>
    </>
  );
}
