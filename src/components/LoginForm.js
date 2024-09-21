import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [submitError, setSubmitError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear errors when typing
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let errorObj = { email: '', password: '' };

    if (!formData.email) {
      errorObj.email = 'Email is required';
      valid = false;
    } else if (!validateEmail(formData.email)) {
      errorObj.email = 'Please enter a valid email';
      valid = false;
    }

    if (!formData.password) {
      errorObj.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 6) {
      errorObj.password = 'Password must be at least 6 characters long';
      valid = false;
    }

    setErrors(errorObj);

    if (valid) {
      setSubmitError('');
      // Call your login API or authentication logic here
      console.log('Logging in:', formData);
      // If login fails, you can set submitError to show error messages
      // setSubmitError("Invalid email or password");
    } else {
      setSubmitError('Please correct the errors before submitting.');
    }
  };

  return (
    <div className="contents d-flex justify-content-center align-items-center min-vh-100">
      <div className="col-md-4">
        <h2 className="text-center mb-4">Log In</h2>
        {submitError && <div className="alert alert-danger">{submitError}</div>}
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm; 