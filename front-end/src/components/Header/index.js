import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/user';

import styles from './Header.module.css';
import button from '../StyleComponents/Buttons.module.css';

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
        <img
          alt="Logo with calendar shape"
          src={require('../../images/logo7.png')}
        />
      </div>
      <div className={styles.user}>
        <div className={styles.text}>
          <p>Hello! {user.username}</p>
          <button className={button.invisible} onClick={handleLogout}>
            Logout
          </button>
        </div>
        {/* Add a modal on profile click */}
        <div className={styles.userAvatar}>
          <img alt="User avatar" src={require('../../images/user.png')} />
        </div>
      </div>
    </div>
  );
};

export default Header;
