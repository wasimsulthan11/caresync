import React from 'react';
import './AdminHome.css';

const AdminHome = () => {
  return (
    <div className="admin-home-container">
      <div className="top-bar">
        <h2>CareSync Admin Panel</h2>
        <div className="admin-profile">
          <img src="/path-to-admin-pic.jpg" alt="Admin Profile" className="profile-pic" />
          <span className="admin-name">Admin</span>
        </div>
      </div>

      <div className="content">
        <h1>Welcome, Admin</h1>
        <div className="admin-actions">
          <div className="action-card">
            <h3>Add Patient Record</h3>
            <p>Enter and manage patient medical records efficiently.</p>
            <button>Add Record</button>
          </div>

          <div className="action-card">
            <h3>View Patient Records</h3>
            <p>Access and review all patient records securely.</p>
            <button>View Records</button>
          </div>

          <div className="action-card">
            <h3>Manage Appointments</h3>
            <p>Schedule and oversee patient appointments.</p>
            <button>Manage Appointments</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
