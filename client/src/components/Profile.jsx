import React, { useState, useEffect } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #9333ea, #3b82f6);
  padding: 40px;
  box-sizing: border-box;
  gap: 10px;
`;

const Sidebar = styled.div`
  width: 35%;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 24px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #1e293b;
  box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 6px solid #3b82f6;
  margin-bottom: 20px;
`;

const Name = styled.h1`
  font-size: 24px;
  margin-bottom: 8px;
`;

const Email = styled.p`
  font-size: 14px;
  color: #475569;
  margin-bottom: 24px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const ActionButton = styled.button`
  background-color: #ef4444;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 20px;
  padding: 12px 24px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s;

  &:hover {
    background-color: #dc2626;
  }
`;

const FollowButton = styled(ActionButton)`
  background-color: #3b82f6;
  &:hover {
    background-color: #2563eb;
  }
`;

const MainContent = styled.div`
  width: 65%;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 24px;
  box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
`;

const Title = styled.h2`
  color: #1e293b;
  font-weight: 700;
  margin-bottom: 20px;
`;

const ProfileForm = () => {
  const [currentWeight, setCurrentWeight] = useState("");
  const [squat, setSquat] = useState("");
  const [bench, setBench] = useState("");
  const [deadlift, setDeadlift] = useState("");
  const [isEditing, setIsEditing] = useState(true);
  const [progressData, setProgressData] = useState([]);
  const [profile, setProfile] = useState({ name: "Bhargav A", email: "Bhargav@example.com", img: "https://imgs.search.brave.com/piqheP2gG2YsHjTib0WJKE2xPg4LgygvCnGLhLXH8h4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9mL2Y0L1VT/QUZBX0hvc3RzX0Vs/b25fTXVza18lMjhJ/bWFnZV8xX29mXzE3/JTI5XyUyOGNyb3Bw/ZWQlMjkuanBnLzUx/MnB4LVVTQUZBX0hv/c3RzX0Vsb25fTXVz/a18lMjhJbWFnZV8x/X29mXzE3JTI5XyUy/OGNyb3BwZWQlMjku/anBn" });

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

  return (
    <Container>
      <Sidebar>
        <ProfileImage src={profile.img} alt="Profile" />
        <Name>{profile.name}</Name>
        <Email>{profile.email}</Email>
        <ButtonContainer>
          <FollowButton>Add Workouts</FollowButton>
          <ActionButton>Logout</ActionButton>
        </ButtonContainer>
      </Sidebar>
      <MainContent>
        <Title>Progress Chart</Title>
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
      </MainContent>
    </Container>
  );
};

export default ProfileForm;
