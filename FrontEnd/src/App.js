import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import PatientRegister from './components/PatientRegister';
import Login from './components/Login';
import PatientHomePage from './components/PatientHomePage';
import DoctorRegister from './components/DoctorRegister';
import PatientProfile from './components/PatientProfile';
import DoctorDetail from './components/DoctorDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppointmentForm from './components/AppointmentForm';
import PatientAppointment from './components/PatientAppointment';
import DoctorHomePage from './components/DoctorHomePage';
import Signout from './components/Signout';
import DisplayPage from './components/DisplayPage';
import DoctorProfile from './components/DoctorProfile';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/register'>
          <Route path='patient' element={<PatientRegister/>}></Route>
          <Route path='doctor' element={<DoctorRegister />}></Route>
      </Route>
      <Route path='/' element={<DisplayPage/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Signout />} />

      <Route path='/patient'>
        <Route path="home" element={<PatientHomePage />} />   
        <Route path='doctordetail' element={<DoctorDetail />} />
        <Route path='profile' element={<PatientProfile />} />
        <Route path='appointmentform' element={<AppointmentForm/>} />
        <Route path='appointment' element={<PatientAppointment/>} />
      </Route>

      <Route path='/doctor'>
        <Route path='home' element={<DoctorHomePage/>} />
        {/* <Route path='appointment' element={<DoctorAppointment/>} /> */}
        <Route path='profile' element={<DoctorProfile/>} />

      </Route>
      
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;