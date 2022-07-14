import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './signin.css';

const Signin = () => {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Http POST request in api
  const postSignin = async (userData) => {
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
        'http://localhost:3001/api/v1/authentication/sign-in',
        settings,
      );
      const { message, data, token } = await response.json();
      localStorage.setItem('token', token);
      localStorage.setItem('id', data.userId);

      if (response.status === 202) {
        return navigate(`/home`);
      }
      setError(message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    postSignin(userData);
  };

  return (
    <div className="background">
      <h1>Calendar</h1>
      <form className="login-context" onSubmit={handleSubmit}>
        <div className="signin-container">
          <div className="username-fields">
            <label htmlFor="login">Email:</label>
            <input
              type="text"
              id="login"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="password-fields">
            <label htmlFor="key">Password:</label>
            <input
              type="password"
              id="key"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button className="login-button" type="submit">
            login
          </button>
          <div className="error-message">{error}</div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
