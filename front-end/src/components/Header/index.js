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

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={require('./logo7.png')} />
      </div>
      <div className={styles.user}>
        <div className={styles.buttons}>
          <p>Hello! {user.username}</p>
          <a onClick={handleLogout}>Logout</a>
        </div>
        <div className={styles.userAvatar}>
          <img src={require('./user.png')} />
        </div>
      </div>
    </div>
  );
};

export default Header;
