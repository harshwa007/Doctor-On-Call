import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
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
            about: "Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum .",
            visitingCharges:"$50",
            EstimatedTime:"45 min",
            career:"Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum ."
        }
    
  // UserProfile function
  const DoctorProfile = () => {
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
        <Card className="bg-primary text-white p-3 mb-2" style={{width:"65%", alignContent:"center", marginLeft:"200px",marginRight:"200px" }}>
          <CardBody className="d-flex align-items-center">
            <CardImg top width="100" style={{height:'200px', width:"200px", marginRight:"100px" }} src={doctorProfile.image} alt={doctorProfile.name} />
            <div className="ms-3" style={{marginLeft:"500px",marginRight:"100px"}}>
              <CardTitle tag="h5">{doctorProfile.name}</CardTitle>
              <CardText>Email: {doctorProfile.email}</CardText>
              <CardText>Phone: {doctorProfile.phone}</CardText>
              <CardText>Education: {doctorProfile.education}</CardText>
               
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