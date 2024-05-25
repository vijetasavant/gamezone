import React, { useState } from 'react';
import '../../styles/Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../login';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [showModal, setShowModal] = useState(false);


  const handleLogin = (user) => {
    console.log(user)
    setIsLoggedIn(true);
    setShowModal(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <header className="sticky">
      <div className="logo mt-4">GameZone</div>
      {/* <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#search">Search</a></li>
        </ul>
      </nav> */}
      <div className="auth-buttons">
        {!isLoggedIn ? (
          <button type="button" className="btn btn-primary" onClick={() => setShowModal(true)}>
            Sign In
          </button>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
      </div>
      <Login showModal={showModal} handleLogin={handleLogin} setShowModal={setShowModal} />
    </header>
  );
};

export default Header;
