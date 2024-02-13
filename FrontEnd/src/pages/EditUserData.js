import React from 'react';
import {Card, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
// json data for user
const userProfile = {
  image: "https://example.com/image.jpg",
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
// used for internal styling
    const StyleForInput={
      width:"50%",
      marginLeft:"25%"
    };
// function for closing form 
const EditUserForm = ({ onClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
  }

  return (
    <Card className="bg-success text-white p-3 mb-2" style={{width:"50%", alignContent:"center", marginLeft:"350px",marginRight:"250px" }}>
    <h2>Edit User Data</h2>
    <Form onSubmit={handleSubmit} style={StyleForInput}>
      <FormGroup controlId="formPhone">
        <Label className="form-label">Phone</Label>
         <Input className="form-input" type="text" defaultValue={userProfile.phone} />
      </FormGroup>
      <FormGroup controlId="formAddress">
        <Label className="form-label">Address</Label>
        <Input className="form-input" type="text" defaultValue={userProfile.address} />
      </FormGroup>

      <Label className='form-label'>Photo</Label>
        <Input className="form-input" type="file" accept=".jpg,.jpeg,.png"/>
        <Label className="form-label">Gender</Label> <br/>
        <select value={patientData.sex}>
              <option>Male</option>
              <option>Female</option>
          </select>
          <br/>
        {/* <Label className="form-label">Gender</Label>
            <Input className="form-input" type="text" defaultValue={patientData.sex} /> */}
            <Label className="form-label">Height</Label>
            <Input className="form-input" type="text" defaultValue={patientData.height} />
            <Label className="form-label">Weight</Label>
            <Input className="form-input" type="text" defaultValue={patientData.weight} />
            <Label className="form-label">BMI</Label>
            <Input className="form-input" type="text" defaultValue={patientData.bmi} />
            <Label className="form-label">blood Group</Label>
            <Input className="form-input" type="text" defaultValue={patientData.bloodGroup} />
            <Label className="form-label">blood Glucose Level</Label>
            <Input className="form-input" type="text" defaultValue={patientData.bloodGlucoseLevel} />
            <Label className="form-label">bloodPressure systolic</Label>
            <Input className="form-input" type="text" defaultValue={patientData.bloodPressure.systolic} />
            <Label className="form-label">blood Pressure diastolic</Label>
            <Input className="form-input" type="text" defaultValue={patientData.bloodPressure.diastolic} />
            <Label className="form-label">heart Rate</Label>
            <Input className="form-input" type="text" defaultValue={patientData.heartRate} />
            <Label className="form-label">Previous Diseases</Label>
            <Input className="form-input" type="text" defaultValue={patientData.PreviousDiseases} />
            <Button variant="light" type="submit">Submit</Button>
    </Form>
    </Card>
  );
}
export default EditUserForm;
