import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ContactMe from "./components/ContactMe";
import { Container } from "react-bootstrap";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Success: Reset the form or display a success message
        console.log('Email sent successfully!');
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        // Error: Handle the error response
        console.error('Email sending failed.');
        // You can handle the error response and display an error message here
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
    

  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route
            path="/ContactMe"
            element={
              <ContactMe
                formData={formData}
                onInputChange={handleInputChange}
                onSubmit={handleSubmit}
              />
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
