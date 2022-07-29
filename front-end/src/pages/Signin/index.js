import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Signin.module.css';
import button from '../../components/StyleComponents/Buttons.module.css';
import input from '../../components/StyleComponents/Inputs.module.css';

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
        'http://localhost:3001/api/v3/authentication/sign-in',
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

  const handleRedirect = () => {
    navigate(`/signup`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    postSignin(userData);
  };

  return (
    <div className={styles.background}>
      <form className={styles.container} onSubmit={handleSubmit}>
        <div className={styles.usernameFields}>
          <label htmlFor="login">Email:</label>
          <input
            className={input.default}
            type="text"
            id="login"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className={styles.passwordFields}>
          <label htmlFor="key">Password:</label>
          <input
            className={input.default}
            type="password"
            id="key"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <a className={styles.redirect} onClick={handleRedirect}>
          Or click here to create your account
        </a>
        <button className={button.send} type="submit">
          login
        </button>
        <div className={styles.error}>{error}</div>
      </form>
    </div>
  );
};

export default Signin;
