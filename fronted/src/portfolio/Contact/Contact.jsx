import React, { useState } from "react";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import { init, send } from 'emailjs-com'; // Import EmailJS methods
import "./Contact.css";
import emailjs from "emailjs-com";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Initialize EmailJS
        init(nV__FokA94GJl5L0r); // Replace with your EmailJS User ID

        // Send the email via EmailJS
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, nV__FokA94GJl5L0r)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert("Your message has been sent!");
                setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
            })
            .catch((err) => {
                console.error('FAILED...', err);
                alert("Something went wrong. Please try again later.");
            });
    };

    return (
        <div className="contact-container">
            <div className="row3">
                <h3>Have you any question?</h3>
                <h4>I'M AT YOUR SERVICE</h4>
            </div>

            <div className="row2">
                {/* Contact Info Items */}
                <div className="contact-info-item">
                    <div className="icon">
                        <FaPhone />
                    </div>
                    <h4>Call Me </h4>
                    <p>+1 60558-54711</p>
                </div>

                <div className="contact-info-item">
                    <div className="icon">
                        <FaMapMarkerAlt />
                    </div>
                    <h4>Address:</h4>
                    <p>SD, USA</p>
                </div>

                <div className="contact-info-item ">
                    <div className="icon">
                        <FaEnvelope />
                    </div>
                    <h4>Email:</h4>
                    <p>mekalathuru.chenchaiah@gmail.com</p>
                </div>

                <div className="contact-info-item ">
                    <div className="icon">
                        <FaGlobe />
                    </div>
                    <h4>Website:</h4>
                    <p>
                        <a href=" https://iamchenchu.github.io/myPortfolio/" target="_blank" rel="noopener noreferrer">
                            Portfolio
                        </a>
                    </p>
                </div>
            </div>

            <div className="row3">
                <h3>SEND ME AN EMAIL</h3>
                <h4>I'M VERY RESPONSIVE TO MESSAGES</h4>
            </div>

            {/* Contact Form */}
            <div className="">
                <div className="contact-form ">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="form-item">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-item">
                                <div className="form-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-item ">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-item ">
                                <div className="form-group">
                                    <textarea
                                        className="form-control"
                                        placeholder="Message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-item ">
                                <button type="submit" className="btn">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
