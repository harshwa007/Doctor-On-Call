// import React, { useState } from 'react';
// import { Button, Modal } from 'react-bootstrap';
// import Doctor from './Doctor';
// import Patient from './Patient';

// function RegistrationBox() {
//   const [showPatientForm, setShowPatientForm] = useState(true);
//   const [showDoctorForm, setShowDoctorForm] = useState(false);

//   const handlePatientRegistrationClick = () => {
//     setShowPatientForm(true);
//     setShowDoctorForm(false);
//   };

//   const handleDoctorRegistrationClick = () => {
//     setShowPatientForm(false);
//     setShowDoctorForm(true);
//   };

//   return (
//     <div>
//       <div className="container mt-5 text-center">
//         <div className="row">
//           <div className="col">
//             <Button
//               variant="primary"
//               onClick={handlePatientRegistrationClick}
//             >
//               Patient Registration
//             </Button>
//           </div>
//           <div className="col">
//             <Button
//               variant="primary"
//               onClick={handleDoctorRegistrationClick}
//             >
//               Doctor Registration
//             </Button>
//           </div>
//         </div>
//       </div>
//       <Modal show={showPatientForm} onHide={() => setShowPatientForm(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Patient Registration Form</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Patient />
//         </Modal.Body>
//       </Modal>
//       <Modal show={showDoctorForm} onHide={() => setShowDoctorForm(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Doctor Registration Form</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Doctor />
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// }

// export default RegistrationBox;
import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import Patient from './Patient';
import Doctor from './Doctor';

class RegistrationBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPatient: true,
      showDoctor: false
    };
  }

  handlePatientRegistration = () => {
    this.setState({
      showPatient: true,
      showDoctor: false
    });
  }

  handleDoctorRegistration = () => {
    this.setState({
      showPatient: false,
      showDoctor: true
    });
  }

  render() {
    return (
      <Container className="mt-5">
        <div className="d-flex justify-content-center">
          <div className="border p-5">
            <h2 className="text-center mb-4">New User? Register Here..</h2>
            <Button
              variant="primary"
              className="me-2"
              onClick={this.handlePatientRegistration}
            >
              Patient Registration
            </Button>
            <Button
              variant="success"
              onClick={this.handleDoctorRegistration}
            >
              Doctor Registration
            </Button>

            {this.state.showPatient && <Patient/>}
            {this.state.showDoctor && <Doctor/>}
          </div>
        </div>
      </Container>
    );
  }
}

export default RegistrationBox;