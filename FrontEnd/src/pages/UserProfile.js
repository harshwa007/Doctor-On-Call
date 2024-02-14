import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditUserForm from './EditUserData';

// json data for User
const userProfile = {
  image: "https://st3.depositphotos.com/15648834/17930/v/380/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "555-555-5555",
  address: "123 Main St, Anytown USA"
}
// json data for Patient
const patientData = 
     {
        id: 1,
        age: 45,
        sex: "Male",
        height: 72,
        weight: 180,
        bmi: 25.3,
        bloodGroup: "O+",
        bloodGlucoseLevel: 110,
        bloodPressure: {
          systolic: 120,
          diastolic: 80
       },
        heartRate: 80,
        PreviousDiseases:[
            'Corona', 'TB'
        ]
      }
  
// UserProfile function
const UserProfile = () => {
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
          <CardImg top width="100" style={{height:'200px', width:"200px", marginRight:"100px" }} src={userProfile.image} alt={userProfile.name} />
          <div className="ms-3" style={{marginLeft:"500px",marginRight:"100px"}}>
            <CardTitle tag="h5">{userProfile.name}</CardTitle>
            <CardText>Email: {userProfile.email}</CardText>
            <CardText>Phone: {userProfile.phone}</CardText>
            <CardText>Address: {userProfile.address}</CardText>
             
          </div>
          <div>
          <CardTitle tag="h5">Medical Info</CardTitle> 
              <CardText>Age: {patientData.age}</CardText>
                    <CardText>Gender: {patientData.sex}</CardText>
                    <CardText>Height: {patientData.height}</CardText>
                    <CardText>Weight: {patientData.weight}</CardText>
                    <CardText>Body Mass Index [BMI]: {patientData.bmi}</CardText>
                    <CardText>Blood Group: {patientData.bloodGroup}</CardText>
                    <CardText>Blood Glucose Level: {patientData.bloodGlucoseLevel}</CardText>
                    <CardText>blood Pressure systolic: {patientData.bloodPressure.systolic}</CardText>
                    <CardText>blood Pressure diastolic: {patientData.bloodPressure.diastolic}</CardText>
                    <CardText>heart Rate: {patientData.heartRate}</CardText>
                    <CardText>Previous Diseases: {patientData.PreviousDiseases}</CardText>
          </div>
        </CardBody>
        <Button className="btn btn-light" style={{width:"100px", alignSelf:"center"}} onClick={handleEdit}>Edit</Button>
      </Card>
      {isEditing && <EditUserForm onClose={handleClose} />}
    </>
  );
}

export default UserProfile;