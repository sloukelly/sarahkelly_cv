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

  // Handle form input changes
  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can access form data using formData.name, formData.email, and formData.message here
    // You can also perform any additional logic or API calls as needed
  };

  return (
    <>
      <Navbar />
      <Container style={{ width: "100%" }}>
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
        </Routes>
      </Container>
    </>
  );
}

export default App;
