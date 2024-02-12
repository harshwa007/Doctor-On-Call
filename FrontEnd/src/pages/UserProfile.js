// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const userData = {
//   name: 'Pata Nahi',
//   email: 'user@example.com',
//   phone: '123-456-7890',
//   address: '123 Main Street, Pune',
//   image: 'user.jpg',
// };

// function UserProfile() {
//   return (
//     <div className="container mt-5">
//       <div className="p-3 bg-primary text-white rounded">
//         <h5>User Profile</h5>
       
  
//       <div className="row mt-3">
//         <div className="col-md-2 text-center">
//             {/* add {user.image} in src */}
//           <img src={userData.image} alt="User" className="img-fluid circle" />
//         </div>
//         <div className="col-md-10">
//           <h6>Name: {userData.name}</h6>
//           <p>Email: {userData.email}</p>
//           <p>Phone: {userData.phone}</p>
//           <p>Address: {userData.address}</p>
//         </div>
//         <button className="btn btn-light btn-sm float-end">Edit</button>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default UserProfile;
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import EditUserData from './EditUserData';

// const userData = {
//   name: 'Pata Nahi',
//   email: 'user@example.com',
//   phone: '123-456-7890',
//   address: '123 Main Street, Pune',
//   image: 'user.jpg',
// };

// function UserProfile() {
//   const [isEditing, setIsEditing] = useState(false);

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleClose = () => {
//     setIsEditing(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Your form submission logic here
//     handleClose();
//   };

//   return (
//     <div className="container mt-5">
//       <div className="p-3 bg-primary text-white rounded">
//         <h5>User Profile</h5>
//       </div>
//       <div className="row mt-3">
//         <div className="col-md-2 text-center">
//           <img src={userData.image} alt="User" className="img-fluid circle" />
//         </div>
//         <div className="col-md-10">
//           <h6>Name: {userData.name}</h6>
//           <p>Email: {userData.email}</p>
//           <p>Phone: {userData.phone}</p>
//           <p>Address: {userData.address}</p>
//         </div>
//         <button className="btn btn-primary btn-sm"  onClick={handleEdit}>
//           Edit
//         </button>
//       </div>
//       {isEditing && (
//         <form onSubmit={handleSubmit}>

//           <EditUserData onClose={handleClose} />
//         </form>
//       )}
//     </div>
//   );
// }

// function EditUserData({ onClose }) {
//   // Your edit user data component logic here

//   return (
//     <div className="bg-light p-3 rounded">
//       <h5>Edit User Data</h5>
//       {/* Your edit form here */}
//       <button className="btn btn-primary btn-sm" type="submit">
//         Submit
//       </button>
//     </div>
//   );
// }
//https://st3.depositphotos.com/15648834/17930/v/380/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg
// export default UserProfile;
// import React from 'react';
// import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// const userProfile = {
//   image: "image",
//   name: "John Doe",
//   email: "john.doe@example.com",
//   phone: "555-555-5555",
//   address: "123 Main St, Anytown USA"
// }

// const UserProfile = () => {
//   return (
//     <>
//     <br/>
//     <br/>
//     <br/>
//     <Card className="bg-primary text-white p-3 mb-2" style={{width:"50%", alignContent:"center", marginLeft:"350px",marginRight:"250px" }}>
//       <CardBody className="d-flex align-items-center">
//         <CardImg top width="100" style={{height:'250px', width:"250px"}} src={userProfile.image} alt={userProfile.name} />
//         <div className="ms-3">
//           <CardTitle tag="h5">{userProfile.name}</CardTitle>
//           <CardText>Email: {userProfile.email}</CardText>
//           <CardText>Phone: {userProfile.phone}</CardText>
//           <CardText>Address: {userProfile.address}</CardText>
//         </div>
//       </CardBody>
//       <button className="btn btn-light" style={{width:"100px", alignSelf:"center"}}>Edit</button>
//     </Card>
//     </>
//   );
// }

// export default UserProfile;
import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import EditUserForm from './EditUserData';

const userProfile = {
  image: "https://st3.depositphotos.com/15648834/17930/v/380/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "555-555-5555",
  address: "123 Main St, Anytown USA"
}
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
      <Card className="bg-primary text-white p-3 mb-2" style={{width:"50%", alignContent:"center", marginLeft:"350px",marginRight:"250px" }}>
        <CardBody className="d-flex align-items-center">
          <CardImg top width="100" style={{height:'250px', width:"250px"}} src={userProfile.image} alt={userProfile.name} />
          <div className="ms-3">
            <CardTitle tag="h5">{userProfile.name}</CardTitle>
            <CardText>Email: {userProfile.email}</CardText>
            <CardText>Phone: {userProfile.phone}</CardText>
            <CardText>Address: {userProfile.address}</CardText>
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