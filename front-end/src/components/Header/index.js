import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/user';

import './header.css';

const Header = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  

  const handleLogout = () => {
    localStorage.clear();
    navigate('/signin');
  };

  return (
    <div className="header">
      <div className="title">Calendar</div>
      <div className="profile">
        <div className="text">
          <p>{user.username}</p>
          <a onClick={handleLogout}>Logout</a>
        </div>
        <div className="profile-img">{ /* user.avatar */ }</div>
      </div>
    </div>
  );
};

export default Header;
