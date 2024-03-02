import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { URL } from '../config'

const PatientRegister = () => {
    const[emailId,setEmail]=useState("")
    const[name,setName]=useState("")
    const[phone,setPhone]=useState("")
    const[password,setPassword]=useState("")
    const[address,setAddress]=useState("")
    const navigate=useNavigate();

    function handleRegistration(e){
        e.preventDefault();
        if(name.length==0){
            console.log("ynrn");
        }
        
        else{
          console.log(name,phone,emailId)
              const body={patientName:name,patientEmail:emailId,patientPhoneNumber:phone,password:password,patientAddress:address}
              try {
                axios.post(`${URL}/patient/`,body).then((response)=>{
                  console.log(response.data)
                  navigate('/user')
                }).catch() 
              } catch (e) {
                
              }
        }
       };

  return (
    <div>
         <div className="container mt-5" style={{width:"600px" ,margin:"auto"}}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 align="center" className="card-title">Register</h2>
                <br></br>
                <form>
                
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label"><b>Name:</b></label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="abc"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                      required
                    />
                   
                  </div>
                  <div className="mb-3">
                    <label htmlFor="emailId" className="form-label"><b>Email Address:</b></label>
                    <input
                      type="email"
                      className="form-control"
                      id="emailId"
                      placeholder="abc@gmail.com"
                     value={emailId}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                    <div className="mb-3">
                    <label htmlFor="phone_no" className="form-label"><b>phone_no:</b></label>
                    <input
                      type="number"
                      className="form-control"
                      id="phone_no"
                      placeholder="4578912345"
                     value={phone}
                     onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label"><b>Password:</b></label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="************"
                      value={password}
                     onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                 <div className="mb-3">
                    <label htmlFor="address" className="form-label"><b>Address:</b></label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="Pune, MH"
                      value={address}
                    onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </div>
                  
  
                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                     onClick={handleRegistration}
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientRegister