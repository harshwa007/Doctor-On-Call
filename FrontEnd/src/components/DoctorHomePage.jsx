import React, { useEffect, useState } from 'react'
import '../css/DoctorHomePage.css'
import axios from 'axios';
import { URL } from '../config';
import default_profile from '../assets/default_profile.png'

function DoctorHomePage() {
    const[patientData, setPatientData]=useState({})
     let[allPatients, setAllPatients]=useState([])
    
    let doctorId=sessionStorage["doctorId"]
    useEffect(() => {
      const GetAllPatient = async () => {
          try {
            const response = await axios.get(`${URL}/doctor/`+doctorId);
            setPatientData(response.data)
            setAllPatients(response.data.patients)
          } catch (error) {
            console.error('Error fetching Doctor:', error);
          }
        };
        GetAllPatient();
      }, {});
      
      const acceptPatient = (patientId) => {   
        const body = {
          doctorId, patientId
        }
        try {
          axios.post(`${URL}/doctor/accept/`+doctorId+`/`+patientId, body).then((response) => {
            const result = response.data
              setAllPatients(response.data.patients)
          }).catch()
        } catch (error) {
        }
      }

      const cancelPatient = (patientId) => {
        const body = {
          doctorId, patientId
        }
        try {
          axios.delete(`${URL}/doctor/cancel/`+doctorId+`/`+patientId, body).then((response) => {
            const result = response.data
              setAllPatients(response.data.patients)
          }).catch()
        } catch (error) {
        }
      }



    return (
    <div>
      <div className='d-flex'>        
      {
      allPatients.map(p=>{
          return (
            <>
              <div class="card m-5 p-3" style={{width:"18rem", borderRadius:"15px"}}>
                <img src={default_profile} class="card-img-top" alt="default" />
                <div class="card-body">
                <h5 class="card-title">{p.patientName} </h5>
                <p class="card-text">{p.patientAddress}</p>
              </div>
              <ul class="list-group list-group-flush">    
                {p.cough ? <li class="list-group-item">cough</li> : ""}
                {p.fever ? <li class="list-group-item">cold</li> : ""}
                {p.cold ? <li class="list-group-item">fever</li> : ""}
                {p.checkUp ? <li class="list-group-item">Check-up</li> : ""}
              </ul>
              <div className='d-flex m-3' >
                <button className='btn btn-success m-2' onClick={() => acceptPatient(p.patientId)}> success </button>
                <button className='btn btn-danger m-2' onClick={() => cancelPatient(p.patientId)}> cancel </button>
              </div>
          </div>
        </>
      )
    }) 
  }
  </div> 
  </div>  
  )    
}

export default DoctorHomePage



