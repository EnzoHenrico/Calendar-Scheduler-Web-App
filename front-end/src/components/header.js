const Header = ({ username, profileImg }) => {
  return (
    <div className="header">
      <div className="title">Calendar</div>
      <div className="profile">
        <p>User{username}</p>
        <figure>{profileImg}</figure>
      </div>
    </div>
  );
};

export default Header;
