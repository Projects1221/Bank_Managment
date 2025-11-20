import React from "react";

export default function AdminNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">Bank Admin</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#adminNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="adminNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2"><a className="nav-link" href="#"><i className="fas fa-tachometer-alt"></i> Dashboard</a></li>
            <li className="nav-item mx-2"><a className="nav-link" href="#"><i className="fas fa-users"></i> Users</a></li>
            <li className="nav-item mx-2"><a className="nav-link" href="#"><i className="fas fa-file-invoice"></i> Account Requests</a></li>
            <li className="nav-item mx-2"><a className="nav-link" href="#"><i className="fas fa-university"></i> Accounts</a></li>
            <li className="nav-item mx-2"><a className="nav-link" href="#"><i className="fas fa-money-check"></i> Transactions</a></li>
            <li className="nav-item mx-2"><a className="nav-link" href="#"><i className="fas fa-sign-out-alt"></i> Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
