import React from 'react';
import './UserHome.css';

const UserHome = () => {
 
    return (
        <div className="user-home-container">
            <div className="top-bar">
                <h2>CareSync</h2>
                <div className="user-profile">
                    <img src="/path-to-profile-pic.jpg" alt="User Profile" className="profile-pic" />
                    <span className="user-name">John Doe</span>
                </div>
            </div>

            <div className="content">
                <h1>Welcome, John Doe</h1>
                <div className="info-section">
                    <div className="info-card">
                        <h3>Medical Records</h3>
                    
    
                        <p>View and manage your medical history, prescriptions, and more.</p>
                        <a href="/user/home/records">View Records</a>


                    </div>

                    <div className="info-card">
                        <h3>Allergies</h3>
                        <p>Check your allergies and update information as needed.</p>
                        <a href="/user/home/allergies">Allergies</a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;
