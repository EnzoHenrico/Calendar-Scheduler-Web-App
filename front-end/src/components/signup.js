const Signup = ({ error }) => {
  return (
    <div className="signin-container">
      <label htmlFor="username">Username:</label>
      <input type="text" id="username"></input>
      <label htmlFor="key">Password:</label>
      <input type="password" id="key"></input>
      <label htmlFor="confirmKey">Confirm password:</label>
      <input type="password" id="confirmKey"></input>
      <error className="error-message">{error}</error>
    </div>
  );
};

export default Signup;
