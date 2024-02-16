

import React from 'react';
import 'remixicon/fonts/remixicon.css';
import '../pages/styles.css';

const Header = () => (
  <header className="header">
    <div className="content">
      <h1>
        <span>Get Quick</span>
        <br />
        Medical Services
      </h1>
      <p>
        In today's fast-paced world, access to prompt and efficient medical
        services is of paramount importance. When faced with a medical
        emergency or seeking immediate medical attention, the ability to
        receive quick medical visit can significantly impact the outcome
        of a situation.
      </p>
      <button className="btn">Get Services</button>
    </div>
    <div className="image">
      <span className="image__bg"></span>
      <img src={require("./assets/header-bg.png")} alt="Header background" />
      <div className="image__content image__content__1">
        <span>
          <i className="ri-user-3-line"></i>
        </span>
        <div className="details">
          <h4>1520+</h4>
          <p>Active Clients</p>
        </div>
      </div>
      <div className="image__content image__content__2">
        <ul>
          <li>
            <span>
              <i className="ri-check-line"></i>
            </span>
            Get 20% off on every 1st month
          </li>
          <li>
            <span>
              <i className="ri-check-line"></i>
            </span>
            Expert Doctors
          </li>
        </ul>
      </div>
    </div>
  </header>
);

const TestimonialCard = ({ image, name, feedback }) => (
  <div className="testimonial-card">
    <img src={image} alt={name} />
    <p>{feedback}</p>
    <h4>{name}</h4>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      image: 'https://example.com/testimonial1.jpg',
      name: 'John Doe',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisi quis mi blandit tincidunt. Sed vel tortor vitae enim vulputate pretium.'
    },
    {
      image: 'https://example.com/testimonial2.jpg',
      name: 'Jane Doe',
      feedback: 'Suspendisse id urna eu velit cursus pharetra. Proin convallis nunc vel ante facilisis, at volutpat ipsum tempor. Cras consequat dui vitae erat imperdiet, in bibendum ipsum aliquam.'
    },
    {
      image: 'https://example.com/testimonial3.jpg',
      name: 'Jim Brown',
      feedback: 'Aliquam eget magna sit amet orci malesuada sodales. In fringilla, velit eu pretium malesuada, ipsum nisl lobortis quam, eget tincidunt eros libero eu metus.'
    }
  ];

  return (
    <div className="testimonials">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard {...testimonial} key={index} />
      ))}
    </div>
  );
};

const NHome = () => (
  <div className="container">
    <Header />
    <br/>
    <br/>
    <h2>Testimonials</h2>
    <Testimonials />
  </div>
);

export default NHome;
