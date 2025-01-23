import React from 'react'

const Home = () => {
    return (
        <div className="home-container">
          <h1>Welcome to the Application</h1>
          <p>Please select a login type to continue:</p>
          <div className="login-links">
            <a href="/user" className="login-button">User Login</a>
            <a href="/admin" className="login-button">Admin Login</a>
          </div>
        </div>
      );
}

export default Home