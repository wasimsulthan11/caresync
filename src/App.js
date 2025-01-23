import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Application</h1>
      <p>Please select a login type to continue:</p>
      <div className="login-links">
        <Link to="/user" className="login-button">User Login</Link>
        <Link to="/admin" className="login-button">Admin Login</Link>
      </div>
    </div>
  );
}

export default Home;
