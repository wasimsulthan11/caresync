import React, { useState } from "react";
import "./UserHome.css";

const UserHome = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Add logic to filter/search records based on the search query
  };

  return (
    <div className="user-interface">
      <header className="header">
        <h1>Hospital Patient Record System</h1>
      </header>
      <div className="content">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by patient name or ID..."
            value={searchQuery}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
        <div className="patient-list">
          <h2>Patient Records</h2>
          <table className="patient-table">
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Condition</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Example data rows - replace with dynamic data */}
              <tr>
                <td>101</td>
                <td>John Doe</td>
                <td>45</td>
                <td>Diabetes</td>
                <td>
                  <button className="view-button">View</button>
                  <button className="edit-button">Edit</button>
                  <button className="delete-button">Delete</button>
                </td>
              </tr>
              <tr>
                <td>102</td>
                <td>Jane Smith</td>
                <td>34</td>
                <td>Hypertension</td>
                <td>
                  <button className="view-button">View</button>
                  <button className="edit-button">Edit</button>
                  <button className="delete-button">Delete</button>
                </td>
              </tr>
              {/* Add more rows dynamically */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
