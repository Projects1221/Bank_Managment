import React, { useState } from 'react'
import api from './api/axios'
// import "../Style/Account.css";
import { useNavigate } from 'react-router-dom';

export default function AccountReqForm() {

    const [aadharNumber,setAadharNumber] = useState("");
    const [panNumber,setPanNumber] = useState("");
    const [occupation,setOccupation] = useState("");
    const [dob,setDob] = useState("");
    const [address,setAddress] = useState("");
    const [accountType,setAccountType] = useState("");

    const navigate = useNavigate();

    const info = {
        aadharNumber : aadharNumber,
        panNumber : panNumber,
        occupation : occupation,
        dob : dob,
        address : address,
        accountType : accountType
    }

    const handleAccount= async (e) =>{
        e.preventDefault();
        try{
          const response = await api.post("/request/create-account",info, {headers:{ Authorization: `Bearer ${localStorage.getItem("token")}`}});
            alert(response.data);
            navigate("/user");
        }catch(error){
            alert(error);
        }
    }

    return (<div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded-4 p-4">
            <h3 className="text-center mb-4 fw-bold text-primary">
              Open Bank Account
            </h3>
      
            <form onSubmit={handleAccount}>
      
              {/* Aadhar */}
              <div className="mb-3 text-start">
                <label className="form-label fw-semibold">Aadhar Number</label>
      
                {/* Center wrapper */}
                <div className="d-flex justify-content-center">
                  <input
                    type="text"
                    className="form-control w-75 text-center"
                    placeholder="Enter Aadhar Number"
                    required
                    value={aadharNumber}
                    onChange={(e)=>{setAadharNumber(e.target.value)}}
                  />
                </div>
              </div>
      
              {/* PAN */}
              <div className="mb-3 text-start">
                <label className="form-label fw-semibold">PAN Number</label>
      
                <div className="d-flex justify-content-center">
                  <input
                    type="text"
                    className="form-control w-75 text-center"
                    placeholder="Enter PAN Number"
                    required
                    value={panNumber}
                    onChange={(e)=>{setPanNumber(e.target.value)}}
                  />
                </div>
              </div>
      
              {/* Account Type */}
              <div className="mb-3 text-start">
                <label className="form-label fw-semibold">Type of Account</label>
      
                <div className="d-flex justify-content-center" >
                  <select className="form-select w-75 text-center"  value={accountType} onChange={(e)=> {setAccountType(e.target.value)}} required>
                    <option value="">Select Account Type</option>
                    <option value="saving">Saving Account</option>
                    <option value="current">Current Account</option>
                  </select>
                </div>
              </div>
      
              {/* Address */}
              <div className="mb-3 text-start">
                <label className="form-label fw-semibold">Address</label>
      
                <div className="d-flex justify-content-center">
                  <textarea
                    className="form-control w-75 text-center"
                    placeholder="Enter Address"
                    rows="3"
                    required
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
                  ></textarea>
                </div>
              </div>
      
              {/* DOB */}
              <div className="mb-3 text-start">
                <label className="form-label fw-semibold">Date of Birth</label>
      
                <div className="d-flex justify-content-center">
                  <input
                    type="date"
                    className="form-control w-75 text-center"
                    required
                    value={dob}
                    onChange={e=>setDob(e.target.value)}
                  />
                </div>
              </div>
      
              {/* Occupation */}
              <div className="mb-3 text-start">
                <label className="form-label fw-semibold">Occupation</label>
      
                <div className="d-flex justify-content-center">
                  <input
                    type="text"
                    className="form-control w-75 text-center"
                    placeholder="Your Occupation"
                    required
                    value={occupation}
                    onChange={e=>setOccupation(e.target.value)}
                  />
                </div>
              </div>
      
              {/* Buttons */}
              <div className="d-flex justify-content-center gap-3 mt-4">
                <button type="submit" className="btn btn-primary px-4" >
                  Submit
                </button>
      
                <button type="reset" className="btn btn-outline-secondary px-4">
                  Reset
                </button>
              </div>
      
            </form>
          </div>
        </div>
      </div>
      
      );
      
      
}
