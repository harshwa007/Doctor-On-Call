import React, { useState } from "react";
import { Card, Button, ButtonGroup, Badge, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const doctors = [
  {
    id: 1,
    name: "Dr. Amit Kumar",
    type: "Ayurvedic",
    rating: 4.5,
    fees: 500,
    image: "https://media.istockphoto.com/id/1425469911/photo/telehealth-doctor-woman-connect-digital-tablet-and-virtual-healthcare-analysis-medical.webp?b=1&s=170667a&w=0&k=20&c=fEmu44Katqf2L4FBuQKYBWs2i54o1SMjBJsVWcVT8U8=",
  },
  {
    id: 2,
    name: "Dr. Radha Krishnan",
    type: "Homeopathic",
    rating: 4.8,
    fees: 700,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Dr. Anuj Sharma",
    type: "Allopathic",
    rating: 2.5,
    fees: 80,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Dr. Amit Kumar",
    type: "Ayurvedic",
    rating: 4.5,
    fees: 800,
    image: "https://via.placeholder.com/150",
  }
];

const DoctorList = () => {
  const [selectedType, setSelectedType] = useState("Ayurvedic");

  const filterDoctors = (type) => {
    setSelectedType(type);
  };

  const filteredDoctors =
    selectedType !== ""
      ? doctors.filter((doctor) => doctor.type === selectedType)
      : doctors;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Badge key={i} pill bg={i <= rating ? "warning" : "secondary"}>
          &#9733;
        </Badge>
      );
    }

    return stars;
  };
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  return (
    <div>
      <ButtonGroup className="mb-3">
        <Button
          variant="success"
          onClick={() => filterDoctors("Ayurvedic")}
          active={selectedType === "Ayurvedic"}
        >
          Ayurvedic
        </Button>
        <Button
          variant="success"
          onClick={() => filterDoctors("Homeopathic")}
          active={selectedType === "Homeopathic"}
        >
          Homeopathic
        </Button>
        <Button
          variant="success"
          onClick={() => filterDoctors("Allopathic")}
          active={selectedType === "Allopathic"}
        >
          Allopathic
        </Button>
      </ButtonGroup>
    
      <Stack direction="horizontal" gap={3}>
        {filteredDoctors.map((doctor) => (
          <div
            key={doctor.id}
            className="mb-3 position-relative text-center"
            onMouseEnter={() => {
              setSelectedDoctor(doctor);
            }}
            onMouseLeave={() => {
              setSelectedDoctor(null);
            }}
          >
            <Card
              style={{
                width: "20rem",
                borderWidth: "3px",
                boxShadow: "none",
                transformStyle: "preserve-3d",
                transition: "transform 0.3s ease",
              }}
            >
              <Card.Img
                variant="top"
                src={doctor.image}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
              <Card.Body className="p-4">
                <Card.Title className="mb-3 fw-bold">
                  {doctor.name}
                  <br/>
                  <Badge bg="success" className="ms-2 d-inline-block">
                    {doctor.type}
                  </Badge>
                </Card.Title>
                <Stack direction="horizontal" gap={1} className="mb-3 justify-content-center">
                  {renderStars(doctor.rating)}
                </Stack>
                <Card.Text className="text-muted mb-4">Fees: Rs. {doctor.fees}</Card.Text>
                <Button variant="primary" className="position-absolute bottom-0 end-0 start-0">
                  Book Appointment
                </Button>
              </Card.Body>
            </Card>
            {selectedDoctor && selectedDoctor.id === doctor.id && (
              <Card
                style={{ 

                  boxShadow: "1px 8px 20px grey",
                  transition: "box-shadow .6s ease-in",
                }}
              />
            )}
          </div>
        ))}
      </Stack>
    </div>
  );
}
export default  DoctorList;

              