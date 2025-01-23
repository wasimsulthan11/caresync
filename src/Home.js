import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
          <h1>Welcome to CareSync</h1>
          <p>Your trusted partner in healthcare management. Please select a login type to continue:</p>
          <div className="login-links">
            <a href="/user" className="login-button">User Login</a>
            <a href="/admin" className="login-button">Admin Login</a>
          </div>
        </div>
    );
}

export default Home;
