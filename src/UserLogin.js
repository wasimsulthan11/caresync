import React from "react";

 function UserLogin() {
  return (
    <div className="login-container">
      <h1>User Login</h1>
      <form className="login-form">
        <label htmlFor="user-email">Email:</label>
        <input type="email" id="user-email" placeholder="Enter your email" />

        <label htmlFor="user-password">Password:</label>
        <input type="password" id="user-password" placeholder="Enter your password" />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default UserLogin;