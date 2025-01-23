import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <h1>Welcome to CareSync</h1>
            <p>Your trusted partner in healthcare management. Please select a login type to continue:</p>
            <div className="login-links">
                <button className="login-button" onClick={() => navigate('/user')}>User Login</button>
                <button className="login-button" onClick={() => navigate('/admin')}>Admin Login</button>
            </div>
        </div>
    );
}

export default Home;
