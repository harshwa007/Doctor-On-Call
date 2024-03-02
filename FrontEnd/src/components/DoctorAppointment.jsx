import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { URL } from '../config';
const PatientAppointment = () => {

  const[doctorAppointment, setDoctorAppointment]=useState([])
  let doctorId=sessionStorage["doctorId"]
  useEffect(() => {
    const GetDoctorAppointment = async () => {
      try {
        const response = await axios.get(`${URL}/doctor/`+doctorId);
        // setDoctorAppointment(response.data)
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching patient:', error);
      }
    };
    GetDoctorAppointment();
  }, []);

//   useEffect(() => {
//     const GetPatientData = async() => {
//       try{
//         let patientId=doctorAppointment.patientId
//         const response = await axios.get(`${URL}/patient/`+patientId);
//         setPatientAppointment(response.data)
//         // console.log(response.data)
//       } catch (error) {
//         console.error('Error fetching patient:', error);
//       }
//     }
//     GetPatientData();
//   }, [])

  return (
    <div className='m-3'>
    <table className="table table-hover table-bordered">
      <thead>
        <tr>
          <th scope="col">Doctor id</th>
          <th scope="col">Doctor Name</th>
          <th scope="col">Time</th>
          <th scope="col">Fee</th>
        </tr>
      </thead>
      <tbody>
          <tr>
          <td>{doctorAppointment.patientId}</td>
          <td>{doctorAppointment.patientName}</td>
          <td>3:30</td>
          <td>400</td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default PatientAppointment