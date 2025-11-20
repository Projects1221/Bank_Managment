import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import AdminDashboard from "./Component/AdminDashboard";
import UserDashboard from "./Component/UserDashboard";
import RegisterUser from './Component/RegisterUser';
import AccountReqForm from './Component/AccountReqForm';

function App() {

  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user" element={<UserDashboard />} />

        {/* User Servicess */}
        <Route path="/account-req" element={<AccountReqForm />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
