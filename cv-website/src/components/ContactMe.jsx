import React from "react";
import './ContactMe.css';

export default function ContactMe({ formData, onInputChange, onSubmit }) {
    return (
    <div className="contact-container">
        <h1>Contact</h1>
        <form id="contact-form" onSubmit={onSubmit} method="POST">
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => onInputChange("name", e.target.value)}
            />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => onInputChange("email", e.target.value)}
            aria-describedby="emailHelp"
            />
        </div>
        <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={(e) => onInputChange("message", e.target.value)}
            ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
            Submit
        </button>
        </form>
    </div>
    );
}
