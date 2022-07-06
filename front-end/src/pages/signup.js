import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './signup.css';

const Signup = () => {
  // Input state setters
  const [error, setError] = useState('');
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setConfirmKey] = useState('');
  const navigate = useNavigate();

  // Submit form handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { username, password, passwordConfirm };

    postSignup(userData);
  };

  // Http POST request in api
  const postSignup = async (userData) => {
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    };

    try {
      const response = await fetch(
        'http://localhost:3001/api/v1/authentication/sign-up',
        settings,
      );
      const data = await response.json();
      if (response.status === 201) {
        console.log(data);
        navigate('/signin');
      }
    } catch (error) {
      console.log(error);
    }
  };
  // Registration Component
  return (
    <div className="background">
      <h1>Calendar</h1>
      <form className="register-context" onSubmit={handleSubmit}>
        <div className="signup-container">
          <div className="username-fields">
            <label htmlFor="username">Username:</label>
            <input
              value={username}
              onChange={(e) => setUser(e.target.value)}
              type="text"
              id="username"
            ></input>
          </div>
          <div className="password-fields">
            <label htmlFor="key">Password:</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="key"
            ></input>
            <label htmlFor="confirmKey">Confirm password:</label>
            <input
              value={passwordConfirm}
              onChange={(e) => setConfirmKey(e.target.value)}
              type="password"
              id="confirmKey"
            ></input>
          </div>
          <div
            className="error-message"
            onChange={(e) => setError(e.target.value)}
          >
            {error}
          </div>
          <button className="register-button" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
