import React from 'react'
import './AdminLogin.css'

const AdminLogin = () => {
    return (
        <div className="login-container">
          <h1>Admin Login</h1>
          <form className="login-form">
            <label htmlFor="admin-email">Email:</label>
            <input type="email" id="admin-email" placeholder="Enter your email" />
    
            <label htmlFor="admin-password">Password:</label>
            <input type="password" id="admin-password" placeholder="Enter your password" />
            <a href="/admin/home">Login</a>
          </form>
        </div>
      );
}

export default AdminLogin