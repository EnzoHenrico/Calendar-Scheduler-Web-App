import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/user';

import styles from './Header.module.css';

const Header = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/signin');
  };

  const handleEditProfile = () => {

  }

  return (
    <div className={styles.header}>
      <div className="logo">Calendar</div>
      <div className="user-profile">
        <p>{user.username}</p>
        <div className="dropdown-options">
          <a onClick={handleLogout}>Logout</a>
          <a onClick={handleEditProfile}>Edit</a>
        </div>
        <div className="user-avatar">{ /* user.avatar */ }</div>
      </div>
    </div>
  );
};

export default Header;
