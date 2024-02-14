import React from 'react';
import {Card, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
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
// used for internal styling
    const StyleForInput={
      width:"50%",
      marginLeft:"25%"
    };
// function for closing form 
const EditDoctorForm = ({ onClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
  }

  return (
    <Card className="bg-success text-white p-3 mb-2" style={{width:"50%", alignContent:"center", marginLeft:"350px",marginRight:"250px" }}>
    <h2>Edit Doctor Data</h2>
    <Form onSubmit={handleSubmit} style={StyleForInput}>
      <FormGroup controlId="formPhone">
        <Label className="form-label">Phone</Label>
         <Input className="form-input" type="text" defaultValue={doctorProfile.phone} />
      </FormGroup>
      <Label className='form-label'>Photo</Label>
        <Input className="form-input" type="file" accept=".jpg,.jpeg,.png"/>
        <Label className="form-label">Education</Label> <br/>
        <select value={doctorProfile.education}>
              <option>B.A.M.S</option>
              <option>M.B.B.S</option>
              <option>B.H.M.S.</option>
        </select>
          <br/>
        <FormGroup controlId="formAddress">
        <Label className="form-label">About</Label>
        <Input className="form-input" type="textarea" defaultValue={doctorData.about} />
      </FormGroup>
            <Label className="form-label">Visiting Charges</Label>
            <Input className="form-input" type="text" defaultValue={doctorData.visitingCharges} />
            <Label className="form-label">Estimated Time</Label>
            <Input className="form-input" type="text" defaultValue={doctorData.EstimatedTime} />
            <Label className="form-label">career</Label>
            <Input className="form-input" type="textarea" defaultValue={doctorData.career} />
            <Button variant="light" type="submit">Submit</Button>
    </Form>
    </Card>
  );
}
export default EditDoctorForm;
