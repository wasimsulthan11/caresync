import React from 'react'

const AdminLogin = () => {
    return (
        <div className="login-container">
          <h1>Admin Login</h1>
          <form className="login-form">
            <label htmlFor="admin-email">Email:</label>
            <input type="email" id="admin-email" placeholder="Enter your email" />
    
            <label htmlFor="admin-password">Password:</label>
            <input type="password" id="admin-password" placeholder="Enter your password" />
    
            <button type="submit">Login</button>
          </form>
        </div>
      );
}

export default AdminLogin