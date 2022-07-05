import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  // Input state setters
  const [error, setError] = useState('');
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Submit form handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { username, password };
    postSignin(userData);
  };

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
      console.log('data:', data, 'token', token);
      

      if(response.status === 202){
        return navigate(`/home/${data.userId}`); 
      }
      setError(message);

    } catch (error) {
      console.log(error);
    }
  };

  // Login component
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
      <div className='error-message'>{error}</div>
    </form>
  );
};

export default Signin;
