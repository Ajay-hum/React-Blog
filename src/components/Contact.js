import React, { useState } from 'react';
import image from "../assets/ContactImage/contact-image.png";

const Contact = () => {
  // State for form fields and errors
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Form validation
  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      // If no errors, submit form
      setFormErrors({});
      setFormSuccess(true);
      // Allow Netlify to process the form submission
      e.target.submit();
    } else {
      setFormErrors(errors);
      setFormSuccess(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="row">
        {/* Image Section */}
        <div className="col-md-6 contact-image">
          <img src={image} alt="Contact Illustration" className="img-fluid" />
        </div>

        {/* Form Section */}
        <div className="col-md-6">
          <h2>Contact Us</h2>
          {formSuccess && <p className="text-success">Your message has been sent successfully!</p>}
          <form 
            className="contact-form" 
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                className={`form-control ${formErrors.name ? 'is-invalid' : ''}`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
              />
              {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@domain.com"
              />
              {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                className={`form-control ${formErrors.subject ? 'is-invalid' : ''}`}
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter your subject"
              />
              {formErrors.subject && <div className="invalid-feedback">{formErrors.subject}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className={`form-control ${formErrors.message ? 'is-invalid' : ''}`}
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message"
              ></textarea>
              {formErrors.message && <div className="invalid-feedback">{formErrors.message}</div>}
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;


