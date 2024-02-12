// import React from 'react';
// import { Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// const userData = {
//     name: 'Pata Nahi',
//     email: 'user@example.com',
//     phone: '123-456-7890',
//     address: '123 Main Street, Pune',
//     image: 'user.jpg',
//   };
// function EditUserData({ onClose }) {
//   const [name, setName] = React.useState(userData.name);
//   const [email, setEmail] = React.useState(userData.email);
//   const [phone, setPhone] = React.useState(userData.phone);
//   const [address, setAddress] = React.useState(userData.address);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Your form submission logic here

//     onClose();
//   };

//   return (
//     <div bg-primary text-white rounded>
//     <h2>Edit User Data</h2>
//     <Form onSubmit={handleSubmit}>
//       <FormGroup className="mb-3" controlId="formName">
//         <FormLabel>Name:</FormLabel>
//         <FormControl type="text" value={name} readOnly />
//       </FormGroup>
//       <FormGroup className="mb-3" controlId="formEmail">
//         <FormLabel>Email:</FormLabel>
//         <FormControl type="email" value={email} readOnly />
//       </FormGroup>
//       <FormGroup className="mb-3" controlId="formPhone">
//         <FormLabel>Phone:</FormLabel>
//         <FormControl type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
//       </FormGroup>
//       <FormGroup className="mb-3" controlId="formAddress">
//         <FormLabel>Address:</FormLabel>
//         <FormControl type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
//       </FormGroup>
//       <FormGroup className="mt-3">
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </FormGroup>
//     </Form>
//     </div>
//   );
// }
// export default EditUserData;
import React from 'react';
import {Card, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
const userProfile = {
  image: "https://example.com/image.jpg",
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
// const EditUserForm = ({ onClose }) => {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onClose();
//   }

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Group controlId="formPhone">
//         <Form.Label>Phone</Form.Label>
//         <Form.Control type="text" defaultValue={userProfile.phone} />
//       </Form.Group>
//       <Form.Group controlId="formAddress">
//         <Form.Label>Address</Form.Label>
//         <Form.Control type="text" defaultValue={userProfile.address} />
//       </Form.Group>
//       <Button variant="light" type="submit">Submit</Button>
//     </Form>
//   );
// }
const EditUserForm = ({ onClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
  }

  return (
    <Card className="bg-success text-white p-3 mb-2" style={{width:"50%", alignContent:"center", marginLeft:"350px",marginRight:"250px" }}>
    <Form onSubmit={handleSubmit} style={{}}>
      <FormGroup controlId="formPhone">
        <Label>Phone</Label>
        <Input type="text" defaultValue={userProfile.phone} />
      </FormGroup>
      <FormGroup controlId="formAddress">
        <Label>Address</Label>
        <Input type="text" defaultValue={userProfile.address} />
      </FormGroup>

      <Label>Photo</Label>
        <Input type="file" accept=".jpg,.jpeg,.png"/>
        <Label>Gender</Label>
            <Input type="text" defaultValue={patientData.sex} />
            <Label>Height</Label>
            <Input type="text" defaultValue={patientData.height} />
            <Label>Weight</Label>
            <Input type="text" defaultValue={patientData.weight} />
            <Label>BMI</Label>
            <Input type="text" defaultValue={patientData.bmi} />
            <Label>blood Group</Label>
            <Input type="text" defaultValue={patientData.bloodGroup} />
            <Label>blood Glucose Level</Label>
            <Input type="text" defaultValue={patientData.bloodGlucoseLevel} />
            <Label>bloodPressure systolic</Label>
            <Input type="text" defaultValue={patientData.bloodPressure.systolic} />
            <Label>blood Pressure diastolic</Label>
            <Input type="text" defaultValue={patientData.bloodPressure.diastolic} />
            <Label>heart Rate</Label>
            <Input type="text" defaultValue={patientData.heartRate} />
            <Label>Previous Diseases</Label>
            <Input type="text" defaultValue={patientData.PreviousDiseases} />
      <Button variant="light" type="submit">Submit</Button>
    </Form>
    </Card>
  );
}
export default EditUserForm;