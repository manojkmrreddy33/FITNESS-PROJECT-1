import React, { useState, useEffect } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const ProfileForm = () => {
  const [currentWeight, setCurrentWeight] = useState("");
  const [squat, setSquat] = useState("");
  const [bench, setBench] = useState("");
  const [deadlift, setDeadlift] = useState("");
  const [isEditing, setIsEditing] = useState(true);
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    fetchProgress();
  }, []);

  const fetchProgress = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/profile");
      setProgressData(res.data);
    } catch (error) {
      console.error("Error fetching progress:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEntry = { currentWeight, squat, bench, deadlift };

    try {
      await axios.post("http://localhost:8080/api/profile", newEntry);
      fetchProgress(); // Refresh progress data
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving progress:", error);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={chartContainerStyle}>
        <h2 style={titleStyle}>Progress Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={progressData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="createdAt" tickFormatter={(tick) => tick.slice(0, 10)} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="squat" stroke="#3B82F6" name="Squat (kg)" />
            <Line type="monotone" dataKey="bench" stroke="#10B981" name="Bench Press (kg)" />
            <Line type="monotone" dataKey="deadlift" stroke="#F59E0B" name="Deadlift (kg)" />
            <Line type="monotone" dataKey="currentWeight" stroke="#EF4444" name="Body Weight (kg)" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {isEditing && (
        <div style={formContainerStyle}>
          <h2 style={titleStyle}>Update Your Progress</h2>
          <form onSubmit={handleSubmit}>
            <label style={labelStyle}>Current Weight (kg):</label>
            <input type="number" value={currentWeight} onChange={(e) => setCurrentWeight(e.target.value)} required style={inputStyle} />
            
            <label style={labelStyle}>Squat (kg):</label>
            <input type="number" value={squat} onChange={(e) => setSquat(e.target.value)} required style={inputStyle} />

            <label style={labelStyle}>Bench Press (kg):</label>
            <input type="number" value={bench} onChange={(e) => setBench(e.target.value)} required style={inputStyle} />

            <label style={labelStyle}>Deadlift (kg):</label>
            <input type="number" value={deadlift} onChange={(e) => setDeadlift(e.target.value)} required style={inputStyle} />
            
            <button type="submit" style={buttonStyle}>Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

// Styles
const containerStyle = { display: "flex", flexDirection: "column", alignItems: "center", width: "80%", margin: "auto", padding: "20px" };
const chartContainerStyle = { width: "100%", padding: "20px", background: "#ffffff", borderRadius: "12px", boxShadow: "0px 4px 16px rgba(59, 130, 246, 0.6)" };
const formContainerStyle = { width: "60%", padding: "20px", background: "#ffffff", borderRadius: "12px", boxShadow: "0px 4px 16px rgba(59, 130, 246, 0.6)" };
const titleStyle = { color: "#1E293B", fontWeight: "600" };
const labelStyle = { fontSize: "14px", color: "#475569", display: "block", marginBottom: "5px" };
const inputStyle = { width: "100%", padding: "10px", marginBottom: "12px", border: "1px solid #E2E8F0", borderRadius: "6px", fontSize: "14px", color: "#1E293B", outline: "none" };
const buttonStyle = { width: "100%", padding: "12px", background: "#3B82F6", color: "white", fontSize: "14px", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "500", transition: "0.3s" };

export default ProfileForm