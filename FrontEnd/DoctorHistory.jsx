import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const DoctorHistory = () => {

    const [modalShow, setModalShow] = useState(false);
  
    const openModal = () => {
  
    }
  
  return (
    <>
    <div>
       <table className="table table-hover table-bordered">
      <thead>
        <tr>
          <th scope="col">Patient id</th>
          <th scope="col">Patient Name</th>
          <th scope="col">Time</th>
          <th scope="col">Fee</th>
          <th scope='col'>Status</th>
        </tr>
      </thead>
      <tbody>
          <tr>
          <td>23</td>
          <td>abcd</td>
          <td>3:30</td>
          <td>400</td>
          <td><Button className='mx-3' variant="primary" onClick={() => setModalShow(true)}>
        <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
        Edit
      </Button> </td>
        </tr>
      </tbody>
    </table>

    <Modal
      centered
      show={modalShow}
        onHide={() => setModalShow(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div>
          <p>
            abcd
          </p>
      </div>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
    </div>
    </>
  )
}

export default DoctorHistory