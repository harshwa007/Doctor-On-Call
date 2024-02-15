import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/css/bootstrap.css";


function AppointmentSubmitForm() {
  return (
    <>
    <div class="container mt-3" style={{width:"30%"}}>
  <h2>Appointment form</h2>
  <form action="/action_page.php">
    <div class="mb-3 mt-3">
      <label for="dname">Doctor Name:</label>
      <input type="text" class="form-control" id="dname" value="Dr.X" name="dname" readonly />
    </div>
    <div class="mb-3">
      <label for="fee">Visting Fee:</label>
      <input type="text" class="form-control" id="fee" name="fee" value="$500000" readonly />
    </div>
    <div class="form-check mb-3">
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox" name="Cough" /> Cough
      </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <label class="form-check-label">
        <input class="form-check-input" type="checkbox" name="Cold" /> Cold
      </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <label class="form-check-label">
        <input class="form-check-input" type="checkbox" name="Fever" /> Fever
      </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <label class="form-check-label">
        <input class="form-check-input" type="checkbox" name="BasicCheckUp" /> Basic Check Up
      </label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
    </>
  )
}

export default AppointmentSubmitForm