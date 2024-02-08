import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaMapMarkerAlt, FaCamera } from 'react-icons/fa';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
    photo: '',
  });

  const { name, email, password, confirmPassword, phone, address, photo } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password and confirm password
    if (password !== confirmPassword) {
      alert('Password and confirm password do not match');
      return;
    }

    // Validate email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email address');
      return;
    }

    // Validate password length
    if (password.length < 8 || password.length > 15) {
      alert('Password must be between 8 and 15 characters');
      return;
    }

    // Validate phone number
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert('Invalid phone number');
      return;
    }

    // Validate address
    if (address.length === 0) {
      alert('Address is required');
      return;
    }

    // Validate photo
    if (photo === '') {
      alert('Photo is required');
      return;
    }

    // Post data to server
    const formDataNew = new FormData();
    formDataNew.append('name', name);
    formDataNew.append('email', email);
    formDataNew.append('password', password);
    formDataNew.append('phone', phone);
    formDataNew.append('address', address);
    formDataNew.append('photo', photo);

    axios.post('/api/users/register', formDataNew)
      .then((response) => {
        console.log(response);
        // Redirect to login page
        window.location.href = '/login';
      })
      .catch((error) => {
        console.log(error);
        alert('Error registering user');
      });
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      address: '',
      photo: '',
    });
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>Patient Registration Form</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label><FaUser /> Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter name" value={name} onChange={handleChange} required />
          </Form.Group>
  
          <Form.Group controlId="email">
            <Form.Label><FaEnvelope /> Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" value={email} onChange={handleChange} required />
          </Form.Group>
  
          <Form.Group controlId="password">
            <Form.Label><FaLock /> Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Enter password" value={password} onChange={handleChange} required />
          </Form.Group>
  
          <Form.Group controlId="confirmPassword">
            <Form.Label><FaLock /> Confirm Password</Form.Label>
            <Form.Control type="password" name="confirmPassword" placeholder="Confirm password" value={confirmPassword} onChange={handleChange} required />
          </Form.Group>
  
          <Form.Group controlId="phone">
            <Form.Label><FaPhone /> Phone</Form.Label>
            <Form.Control type="text" name="phone" placeholder="Enter phone number" value={phone} onChange={handleChange} required />
          </Form.Group>
  
          <Form.Group controlId="address">
            <Form.Label><FaMapMarkerAlt /> Address</Form.Label>
            <Form.Control type="text" name="address" placeholder="Enter address" value={address} onChange={handleChange} required />
          </Form.Group>
  
          <Form.Group controlId="photo">
            <Form.Label><FaCamera /> Photo</Form.Label>
            <Form.Control type="file" accept="image/*" custom name="photo" onChange={handleFileChange} required />
          </Form.Group>
  
          <Button variant="primary" type="submit" block>
            Register
          </Button>
  
          <Button variant="secondary" type="button" block onClick={handleCancel}>
            Cancel
          </Button>
        </Form>
      </div>
    </div>
  );
}
export default RegistrationForm;