# DOCTOR AT CALL


### 1. Introduction

## 1.1 Purpose
The purpose of this document is to provide a detailed description of the software system "Doctor at Call." This system aims to book appointment, facilitating  consultations and medical assistance.
## 1.2 Scope
The "Doctor at Call" system will include a web application accessible to users seeking medical advice. The application will enable users to book with available doctors for consultations  and visiting.

## 1.3 Definitions, Acronyms, and Abbreviations

SRS: Software Requirements Specification
API: Application Programming Interface
UI: User Interface





### 2. System Description
## 2.1 System Overview
"Doctor at Call" is a telemedicine application that allows users to request on-demand medical consultations with registered and available doctors. The system will prioritize ease of use, security, and real-time communication.

## 2.2 System Features
2.2.1 User Registration and Authentication
•	Users can create accounts with their personal information.
•	A secure authentication mechanism will be implemented.
2.2.2 Doctor Availability Status
•	Doctors can set their availability status (online/offline).
•	Real-time updates on doctor availability.
2.2.3 Appointment Scheduling
•	Users can schedule appointments with available doctors.
•	Notifications for upcoming appointments.
•	Secure and encrypted communication.
•	Appointment Request Processing
•	Upon user request, the system should identify and display a list of available doctors based on their specialization, availability, and proximity to the user's location.
•	Users can select a preferred doctor and propose a time slot for the appointment.

2.2.4 Prescription and Medical Records

•	Doctors can generate and share electronic prescriptions.
•	Users can access and manage their medical records.



### 3. Functional Requirements
## 3.1 User Module
3.1.1 User Registration

•	Users must provide valid information for registration.
•	Unique usernames and passwords for authentication.
3.1.2 Profile Management

•	Users can update their profiles.
•	Option to add and edit medical history.
3.1.3 Appointment Booking

•	Users can view available doctors and schedule appointments.
•	Confirmation notifications for booked appointments.

## 3.2 Doctor Module
3.2.1 Doctor Registration
•	Doctors must provide necessary credentials for registration.
•	Verification process for medical professionals.
3.2.2 Availability Management
•	Doctors can set and update their availability status.
•	Real-time synchronization with the user interface.
3.2.3 Consultation Management
•	Doctors receive and accept/reject appointment requests.

## 3.3 Prescription and Medical Records Management
3.3.1 Prescription Generation

•	Doctors should have the capability to create electronic prescriptions during or after a consultation.
•	Prescriptions should include details such as medication names, dosage, and instructions.
3.3.2 Prescription Delivery

•	Users should receive electronic prescriptions securely through the application.
•	Prescription details should be stored in the user's medical records.
3.3.3 Medical Records Access

•	Users should have the ability to access and download their medical records at any time.
•	The system should maintain a secure and organized repository of medical records for each user.
3.3.4 Medical History Update

•	Users should be able to add, edit, or update their medical history through the application.
•	Changes in the medical history should be reflected in future consultations.



Non-functional Requirement
Performance
•	The server must be able to support an unlimited number of devices, i.e., it must place no restrictions on the number of gadgets that can be used simultaneously.
•	A limitless amount of active client payments must be supported by the server, and payments must never be lost.
Security
•	Registered users will be allowed to place an Appointment.
•	Sensitive data will always be transmitted with encryption. The system will internally maintain a secure communication channel between servers (web servers, application servers, database servers).
Reliability
•	The system should be scalable, with the ability to accommodate a large number of users at once.
•	The site's response time should be as quick as feasible, and it should be able to load balance the server.
Availability
•	This application is available for 24 hrs anywhere, anytime.
Maintainability
•	A Commercial database software will be used to maintain System data Persistence.
•	A readymade Web Server will be installed to host online doctor at call portal (Web Site) to management server capabilities.
•	IT operations team will easily monitor and configure the system using Administrative tools provided by Servers.
•	Separate environments will be maintained for the system for isolation in production, testing, and development.
Portability
•	PDA: Portable Device Application
•	The system will provide a portable User Interface (HTML, CSS, JS) through which users will be able to access the Doctor at Call portal.
•	The system can be deployed to a single server, multi-server, to any OS, Cloud (Azure or AWS or GCP).
Accessibility
•	After authentication, only logged-in users will be able to place an Appointment.
•	Through a personalized dashboard, the BOD team will be able to monitor daily, weekly, monthly, and annual business growth.
Efficiency
•	The system will be able to manage all transactions with isolation.
Safety
•	All the data will be hidden for other users.
Scalability
•	Online Doctor at Call portal will be secure from malicious attacks.
•	Online Doctor at Call portal functionalities are protected from the outside with proper configuration.
•	Online Doctor at Call portal will always be kept updated with the latest antivirus software.
•	 data will be backed up periodically to ensure the safety of data using an incremental backup strategy.
•	Role-based security will be applied for Application data and operations accessibility.
Benefits
•	The Patients will save time because they are not going to the clinic.
•	The doctor can visit patient at the proper time.
•	The patient can book doctor appointment  at anytime from it’s place in that area.








### 4. Use Case 

 




### 5. DFD
1. Level 0 
 


1. Level 0 

