import React, { useState,useEffect } from "react";
import AdminNavbar from "./AdminNavbar";
import { useNavigate } from "react-router-dom";
import api from "./api/axios";

export default function AdminDashboard() {

  const fetchPendingRequests=async()=>{
    try{
const response = await api.get("/admin/pending-request", {headers:{ Authorization: `Bearer ${localStorage.getItem("token")}`}});
  console.log(response.data);  
  setPendingRequests(response.data);
    }catch{
      alert("Error"+error.data);
    
    }
  }

  const rejectRequest=async(id)=>{
    try{
const response = await api.put("/admin/reject-request", {"id":id},{headers:{ Authorization: `Bearer ${localStorage.getItem("token")}`}});
  alert(response.data);  
    }catch{
      alert("Error"+error.data);
    
    }
  }
  const acceptRequest=async(id)=>{
    try{
const response = await api.put("/admin/accept-request", {"id":id},{headers:{ Authorization: `Bearer ${localStorage.getItem("token")}`}});
  alert(response.data);  
    }catch{
      alert("Error"+error.data);
    
    }
  }
  


  useEffect(() => {
    fetchPendingRequests();
  }, []);

  const [pendingRequests, setPendingRequests] = useState([]);
  const navigate = useNavigate();
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
              <th>User Name</th>
              <th>Account Type</th>
              <th>Occupation</th>
              <th>Pan Number</th>
              <th>Aadhatr Number</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {pendingRequests.length > 0 ? (
                pendingRequests.map((req) => (
                  <tr key={req.id}>
                    <td>{req.username || "Unknown"}</td>
                    <td>{req.accountType}</td>
                    <td>{req.occupation}</td>
                    <td>{req.panNumber}</td>
                    <td>{req.aadharNumber}</td>
                    <td>{new Date(req.createdAt).toLocaleDateString()}</td>
                    <td className="text-warning fw-bold">{req.request_status}</td>
                    <td>
                      <button className="btn btn-success btn-sm me-1" onClick={()=>{acceptRequest(req.id)}}>Approve</button>
                      <button className="btn btn-danger btn-sm"onClick={()=>{rejectRequest(req.id)}}>Reject</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center text-danger">
                    No Pending Requests
                  </td>
                </tr>
              )}
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
