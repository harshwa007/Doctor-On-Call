import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { URL } from '../config'
import default_profile from '../assets/default_profile.png'
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Form, Modal } from 'react-bootstrap';

const PatientProfile = () => {
  const[patientData, setPatientData]=useState({})
  const [modalShow, setModalShow] = useState(false);
  const[patient, setPatient]=useState({
    "patientEmail":""
  })

  let pid = sessionStorage["patientId"]
  useEffect(() => {
    const GetAllPatient = async () => {
      try {
        const response = await axios.get(`${URL}/patient/`+pid);
        setPatientData(response.data)
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching Patient:', error);
      }
    };
    GetAllPatient();
  }, []);

  const handleInput=(e)=>{
    setPatient({...patient,[patientData.patientName]:e.target.value})
  }

// console.log(patientData);
  return (
    <div>
    <div class="container my-3">
      
       <div class="row align-items-center">
        <div class="col-3">
        <div className="profile-photo">
        <img
          src={default_profile}
          alt="Profile"
          style={{ width: '100px', height: '100px',borderRadius:"50%",margin:"40px 20px",scale:"1.5" }}
        />
      </div>
        </div>
        <div class="col-4 sm-col-12">
          <h4>{patientData.patientName}</h4>
          <h4>{patientData.patientEmail}</h4>
          <h4>{patientData.patientPhoneNumber}</h4>
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
      

      <Modal
      centered
      show={modalShow}
        onHide={() => setModalShow(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {/* <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={patientData.patientName}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
          <p>{patientData.patientName}</p> */}
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" 
              placeholder="name@example.com" value={patientData.patientEmail}
              name='patientEmail'
              onChange={handleInput}/>
            </div>
            </form>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>

    <Button className='mx-3' variant="primary" onClick={() => setModalShow(true)}>
        <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
        Edit
      </Button> 
    </div>
    </div>
  )
}

export default PatientProfile