import React, { useState,useEffect } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditDoctorForm from './EditDoctorData';
// json data for User
const doctorProfile = {
    image: "https://st3.depositphotos.com/15648834/17930/v/380/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "555-555-5555",
    education:"B.A.M.S."
    
  }
  // json data for Patient
  const doctorData = 
       {
            about: "He is a medical professional who provides primary care services to patients of all ages. He diagnoses and treat a wide range of medical conditions, provide preventive care, and refer patients to specialists when necessary. He build long-term relationships with their patients and provide comprehensive care for their physical and mental well-being.",
            visitingCharges:"$50",
            EstimatedTime:"45 min",
            career:"A result oriented Doctor with specialization in Internal Medicine (DNB,FCPS) with specialization in Diabetes ( Dip cert Diabetology) and Asthma with over20+ years of rich and insightful experience across multiple hospitals.Currently working as Consultant Physician and Diabetologist / Apollo Family Physician with Apollo Clinic. Past experience includes working as Consultant Physician, lecturer and as a Co-investigator in Clinical Trials & Research in Chest Medicine, Diabetes and Microbiology of Air Ways."
        }
  
  // UserProfile function
  const DoctorProfile = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:9090/doctor/1').then((response) => {
        setUsers(response.data);
      });
    }, []);
    const [isEditing, setIsEditing] = useState(false);
  
    const handleEdit = () => {
      setIsEditing(true);
    }
  
    const handleClose = () => {
      setIsEditing(false);
    }
  
    return (
      <>
        <br/>
        <br/>
        <br/>
        <Card className="p-3 mb-2" style={{width:"100%", alignContent:"center" }}>
          <CardBody className="d-flex align-items-center">
            <CardImg top width="100" style={{height:'200px', width:"200px", marginRight:"100px" }} src={doctorProfile.image} alt={doctorProfile.name} />
            <div className="ms-3" style={{marginLeft:"500px",marginRight:"100px"}}>
              <CardTitle tag="h5">{users.doctorName}</CardTitle>
              <CardText>Email: {users.doctorEmail}</CardText>
              <CardText>Phone: {users.doctorPhoneNumber}</CardText>
              <CardText>Education: {users.doctorEducation}</CardText>
               
            </div>
            <div> 
                <CardText>About: {doctorData.about}</CardText>
                <CardText>Visiting Charges: {doctorData.visitingCharges}</CardText>
                <CardText>Estimated Time: {doctorData.EstimatedTime}</CardText>
                <CardText>Career: {doctorData.career}</CardText>
            </div>
          </CardBody>
          <Button className="btn btn-light" style={{width:"100px", alignSelf:"center"}} onClick={handleEdit}>Edit</Button>
        </Card>
        {isEditing && <EditDoctorForm onClose={handleClose} />}
      </>
    );
  }
  
  export default DoctorProfile;