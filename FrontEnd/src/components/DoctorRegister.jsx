import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { URL } from '../config'

const DoctorRegister = () => {

    const getInitialCategory = () => {
      const value = "Allopathy";
      return value;
    };

    const[emailId,setEmail]=useState("")
    const[name,setName]=useState("")
    const[phone,setPhone]=useState("")
    const[password,setPassword]=useState("")
    const[education,setEducation]=useState("")
    const[category, setCategory]=useState(getInitialCategory)
    const navigate=useNavigate();

    function handleChange(e){
      setCategory(e.target.value)
      // console.log(category)

    }
    function handleRegistration(e){
        e.preventDefault();
        if(name.length==0){
            console.log("ynrn");
        }
        
        else{
          console.log(name,phone,emailId)
              const body={doctorName:name,doctorEmail:emailId,doctorPhoneNumber:phone,password:password,doctorEducation:education,doctorCategory:category}
              try {
                axios.post(`${URL}/doctor/`,body).then((response)=>{
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
                    <label htmlFor="address" className="form-label"><b>Education:</b></label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="Pune, MH"
                      value={education}
                      onChange={(e) => setEducation(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="address" className="form-label"><b>Category:</b></label>
                    <select class="form-select" value={category} onChange={handleChange}>
                      <option value="Allopathy">Allopathy</option>
                      <option value="Ayurveda">Ayurveda</option>
                      <option value="Homeopathy">Homeopathy</option>
                    </select>
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

export default DoctorRegister