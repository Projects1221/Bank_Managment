import React from "react";

export default function UserNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">MyBank</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#userNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="userNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2"><a className="nav-link" href="#"><i className="fas fa-home"></i> Dashboard</a></li>
            <li className="nav-item mx-2"><a className="nav-link" href="#"><i className="fas fa-wallet"></i> Accounts</a></li>
            <li className="nav-item mx-2"><a className="nav-link" href="#"><i className="fas fa-exchange-alt"></i> Transfers</a></li>
            <li className="nav-item mx-2"><a className="nav-link" href="#"><i className="fas fa-user"></i> Profile</a></li>
            <li className="nav-item mx-2"><a className="nav-link" href="#"><i className="fas fa-sign-out-alt"></i> Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
