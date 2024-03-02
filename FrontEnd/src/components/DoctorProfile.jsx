import React, { useEffect, useState } from 'react'
import default_profile from '../assets/default_profile.png'
import axios from 'axios'
import { URL } from '../config'


const DoctorProfile = () => {
    const[doctorData, setDoctorData]=useState({})
    let did = sessionStorage["doctorId"]

    useEffect(() => {
        const GetDoctorData = async () => {
          try {
            const response = await axios.get(`${URL}/doctor/`+did);
            setDoctorData(response.data)
            console.log(response.data)
          } catch (error) {
            console.error('Error fetching Patient:', error);
          }
        };
        GetDoctorData();
      }, []);

    //   console.log(doctorData);

  return (
    <div>
    <div class="container my-3">
      
       <div class="row align-items-center">
        <div class="col-3">
        <div className="profile-photo">
        <img
          src={`${URL}/doctor/image/`+doctorData.doctorePhoto || default_profile}
          alt="Profile"
          style={{ width: '100px', height: '100px',borderRadius:"50%",margin:"40px 20px",scale:"1.5" }}
        />
      </div>
        </div>
        <div class="col-4 sm-col-12">
          <h4>{doctorData.doctorName}</h4>
          <h4>{doctorData.doctorEmail}</h4>
          <h4>{doctorData.doctorPhoneNumber}</h4>
        </div>
        <div class="col-5">
          <h3>Medical info</h3>
          <p>age: 24</p>
          <p>blood group: B+</p>
          <p>height: 172cm</p>
          <p>weight: 65kg</p>
          <p></p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default DoctorProfile