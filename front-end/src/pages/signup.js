import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Signup.module.css';
import button from '../components/StyleComponents/Buttons.module.css';
import input from '../components/StyleComponents/Inputs.module.css';

const Signup = () => {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setConfirmKey] = useState('');
  const navigate = useNavigate();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, username, password, passwordConfirm };

    postSignup(userData);
  };

  return (
    <div className={styles.background}>
      <form className={styles.container} onSubmit={handleSubmit}>
        <div className={styles.usernameFields}>
          <label htmlFor="email">Email:</label>
          <input
            className={input.default}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            id="email"
          ></input>
        </div>
        <div className={styles.usernameFields}>
          <label htmlFor="username">Username:</label>
          <input
            className={input.default}
            value={username}
            onChange={(e) => setUser(e.target.value)}
            type="text"
            id="username"
          ></input>
        </div>
        <div className={styles.passwordFields}>
          <label htmlFor="key">Password:</label>
          <input
            className={input.default}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="key"
          ></input>
          <label htmlFor="confirmKey">Confirm password:</label>
          <input
            className={input.default}
            value={passwordConfirm}
            onChange={(e) => setConfirmKey(e.target.value)}
            type="password"
            id="confirmKey"
          ></input>
        </div>
        <div
          className={styles.error}
          onChange={(e) => setError(e.target.value)}
        >
          {error}
        </div>
        <button className={button.send} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Signup;
