import React from "react";
import AdminNavbar from "./AdminNavbar";

export default function AdminDashboard() {
  return (
    <>  <AdminNavbar/>
    <div className="container my-4">
    
      <div className="row g-3">
        <div className="col-md-3">
          <div className="card shadow-sm text-center border-0">
            <div className="card-body">
              <h6 className="text-muted">Total Users</h6>
              <h3 className="fw-bold">1245</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm text-center border-0">
            <div className="card-body">
              <h6 className="text-muted">Total Accounts</h6>
              <h3 className="fw-bold">3842</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm text-center border-0">
            <div className="card-body">
              <h6 className="text-muted">Pending Requests</h6>
              <h3 className="fw-bold text-danger">42</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm text-center border-0">
            <div className="card-body">
              <h6 className="text-muted">Transactions Today</h6>
              <h3 className="fw-bold">856</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h5>Recent Account Requests</h5>
        <table className="table table-striped table-hover shadow-sm bg-white">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Account Type</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rakesh</td>
              <td>Savings</td>
              <td>14 Nov</td>
              <td>Pending</td>
              <td>
                <button className="btn btn-success btn-sm">Approve</button>
                <button className="btn btn-danger btn-sm">Reject</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <h5>Recent Transactions</h5>
        <table className="table table-striped table-hover shadow-sm bg-white">
          <thead className="table-dark">
            <tr>
              <th>Txn ID</th>
              <th>From</th>
              <th>To</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TXN48392</td>
              <td>AC 1234</td>
              <td>AC 8493</td>
              <td>₹10,000</td>
              <td>15 Nov</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
    </>
  );
}
