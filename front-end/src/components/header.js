import './style/header.component.css';

const Header = ({ username, profileImg }) => {
  return (
    <div className="header">
      <div className="title">Calendar</div>
      <div className="profile">
        <p>User{username}</p>
        <div className='profile-img'>{profileImg}</div>
      </div>
    </div>
  );
};

export default Header;
