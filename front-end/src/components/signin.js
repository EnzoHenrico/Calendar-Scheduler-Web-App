import { useState } from 'react';

const Signin = () => {
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { username, password };
    console.log(userData);
    postSignin(userData);
  };

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
      const data = await response.json();
      localStorage.setItem('token', data.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="signin-container" onSubmit={handleSubmit}>
      <label htmlFor="login">Username:</label>
      <input
        type="text"
        id="login"
        value={username}
        onChange={(e) => setUser(e.target.value)}
      ></input>
      <label htmlFor="key">Password:</label>
      <input
        type="password"
        id="key"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button type="submit">Send</button>
    </form>
  );
};

export default Signin;
