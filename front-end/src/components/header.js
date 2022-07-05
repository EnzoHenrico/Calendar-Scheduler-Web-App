import { useNavigate } from 'react-router-dom';
import './style/header.component.css';

const Header = ({ username, profileImg }) => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.clear();
    navigate('/signin')
  }
  
  return (
    <div className="header">
      <div className="title">Calendar</div>
      <div className="profile">
        <p>User{username}</p>
        <a onClick={handleLogout}>Logout</a>
        <div className='profile-img'>{profileImg}</div>
      </div>
    </div>
  );
};

export default Header;
