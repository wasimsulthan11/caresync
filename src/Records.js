import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // If using React Router
import axios from "axios";
import "./Records.css";

const Record = () => {
    const [patient, setPatient] = useState(null);
    const [expanded, setExpanded] = useState(null);
    const navigate = useNavigate(); // Navigation hook

    useEffect(() => {
        axios.get("http://localhost/user_records/patients.php")
            .then(response => {
                setPatient(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const toggleExpand = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <div className="container">
            <h1>Medical Records</h1>
            {patient ? (
                <>
                    <h2>Patient: {patient.name}</h2>
                    <div className="cards-container">
                        {patient.diseases.map((disease, index) => (
                            <div key={index} className="card">
                                <div className="card-header" onClick={() => toggleExpand(index)}>
                                    <h3>{disease.name}</h3>
                                    <span>{expanded === index ? "▲" : "▼"}</span>
                                </div>
                                {expanded === index && (
                                    <div className="card-details">
                                        <p><strong>Diagnosis Date:</strong> {new Date(disease.diagnosisDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
                                        <p><strong>Doctor:</strong> {disease.doctor}</p>
                                        <p><strong>Prescription:</strong> {disease.prescription}</p>
                                        <p><strong>Hospital:</strong> {disease.hospital}</p>
                                        <p><strong>Still in Medication:</strong> {disease.stillInMedication ? "✅ Yes" : "❌ No"}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <p>Loading patient data...</p>
            )}

            {/* Floating Add Button */}
            <button className="floating-button" onClick={() => navigate("/user/home/records/add-record")}>
                +
            </button>
        </div>
    );
};

export default Record;
