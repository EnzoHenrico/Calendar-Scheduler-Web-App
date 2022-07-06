import { Link } from 'react-router-dom';

import './App.css';
import './pages/body.css';
// import Header from './components/header';
// import Hero from './components/hero';
// import Signin from './components/signin';
// import Signup from './components/signup';

const App = () => {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/signin">Login</Link>
        </li>
        <li>
          <Link to="/signup">Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default App;
