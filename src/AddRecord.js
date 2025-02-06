import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddRecord.css";

const AddRecord = () => {
    const [formData, setFormData] = useState({
        name: "",
        doctor: "",
        prescription: "",
        hospital: "",
        stillInMedication: false,
        diagnosisDate: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost/user_records/add_record.php", formData);
            alert("Record added successfully!");
            navigate("/user/home/records"); // Redirect to records page
        } catch (error) {
            console.error("Error adding record:", error);
        }
    };

    return (
        <div className="form-container">
            <h2>Add Medical Record</h2>
            <form onSubmit={handleSubmit}>
                <label>Disease Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                <label>Doctor:</label>
                <input type="text" name="doctor" value={formData.doctor} onChange={handleChange} required />

                <label>Prescription:</label>
                <input type="text" name="prescription" value={formData.prescription} onChange={handleChange} required />

                <label>Hospital:</label>
                <input type="text" name="hospital" value={formData.hospital} onChange={handleChange} required />

                <label>Diagnosis Date:</label>
                <input type="date" name="diagnosisDate" value={formData.diagnosisDate} onChange={handleChange} required />

                <label>
                    <input type="checkbox" name="stillInMedication" checked={formData.stillInMedication} onChange={handleChange} />
                    Still in Medication?
                </label>

                <button type="submit">Add Record</button>
            </form>
        </div>
    );
};

export default AddRecord;
