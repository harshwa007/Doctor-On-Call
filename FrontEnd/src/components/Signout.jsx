
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/Signout.css';

export default function Singout() {
  const navigate=useNavigate()
    const[showConfirmation,setShowConfirmation]=useState(false)
    const handleSignOut=()=>{
      sessionStorage.clear()
      navigate("/login");
    }
  return (
    <div className="signout-page">
      <div className="box">
    <h1 className="out">Sign Out</h1>
        <p>Are you really sure you want to sign out?</p>
        <button onClick={handleSignOut}>Confirm Sign Out</button>
        <button onClick={() => setShowConfirmation(false)}>Cancel</button>
    </div>
  </div>
  )
}
