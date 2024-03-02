import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { URL } from '../config';
const PatientAppointment = () => {

  const[patientAppointment, setPatientAppointment]=useState([])
  let patientId=sessionStorage["patientId"]
  useEffect(() => {
    const GetPatientAppointment = async () => {
      try {
        const response = await axios.get(`${URL}/patient/`+patientId);
        setPatientAppointment(response.data)
        // console.log(response.data)
      } catch (error) {
        console.error('Error fetching Doctor:', error);
      }
    };
    GetPatientAppointment();
  }, []);

  useEffect(() => {
    const GetDoctorData = async() => {
      try{
        let doctorId=patientAppointment.doctorId
        const response = await axios.get(`${URL}/doctor/`+doctorId);
        setPatientAppointment(response.data)
        // console.log(response.data)
      } catch (error) {
        console.error('Error fetching Doctor:', error);
      }
    }
    GetDoctorData();
  }, [])

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
          <td>{patientAppointment.doctorId}</td>
          <td>{patientAppointment.doctorName}</td>
          <td>3:30</td>
          <td>400</td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default PatientAppointment