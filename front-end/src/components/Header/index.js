import { useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {
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
          <p>User</p>
          <a onClick={handleLogout}>Logout</a>
        </div>
        <div className="profile-img"></div>
      </div>
    </div>
  );
};

export default Header;
