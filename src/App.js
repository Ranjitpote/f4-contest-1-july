import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form fields
    if (!name) {
      alert('Name is required');
      return;
    }

    if (!email) {
      alert('Email is required');
      return;
    }

    if (!password) {
      alert('Password is required');
      return;
    }

    if (!confirmPassword) {
      alert('Confirm Password is required');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Handle form submission
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="container">
      <div className="left">
        <img src="https://i.ibb.co/FHzGnZN/logo.png" alt="" />
        <p className="desc">Find 3D Objects, Mockups and Illustration here.</p>
        <img
          src="https://www.figma.com/file/QMnP8WR61daY2y90vISyPc/Sign-up-(Community)?type=design&node-id=7-13&mode=design&t=dUhCfdRQQhu8axGH-4"
          alt=""
          className="illustration"
        />
      </div>
      <div className="right">
        <div className="wrapper">
          <h1 className="heading">Create Account</h1>
          <div className="social-login">
            <a href="#" className="google">
              <img src="https://i.ibb.co/Mc8r1Z9/google.png" alt="" />
              <span>Sign up with Google</span>
            </a>
            <a href="#" className="facebook">
              <img src="https://i.ibb.co/19Y78qw/facebook.png" alt="" />
              <span>Sign up with Facebook</span>
            </a>
          </div>
          <div className="or">- OR -</div>
          <form onSubmit={handleSubmit} className="form">
            <div className="input-group">
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
              />
              <label htmlFor="name">Full Name</label>
            </div>
            <div className="input-group">
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-group">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <label htmlFor="password">Password</label>
              <img
                src="https://svgshare.com/i/uqQ.svg"
                alt=""
                className="eye"
                onClick={handleShowPasswordToggle}
              />
              <img
                src="https://svgshare.com/i/uqu.svg"
                alt=""
                className="close-eye"
                style={{ display: showPassword ? 'block' : 'none' }}
                onClick={handleShowPasswordToggle}
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
            </div>
            <button type="submit" className="btn">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
