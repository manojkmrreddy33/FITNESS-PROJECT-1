import React, { useState, useEffect } from "react"; 
import styled from "styled-components";
import axios from "axios";
import { getUserDetails, UserUpdate } from "../api";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
  justify-content: center;
`;

const LeftSide = styled.div`
  flex: 1;
  max-width: 400px;
`;

const RightSide = styled.div`
  flex: 2;
  min-width: 300px;
`;

const ProfileCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const EditButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const Name = styled.h2`
  margin: 0;
`;

const Info = styled.p`
  margin: 0.5rem 0;
`;

const Label = styled.h4`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const UpdateButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const PreviewImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-top: 10px;
  object-fit: cover;
`;

const AchievementFile = styled.a`
  display: inline-block;
  margin-top: 0.5rem;
  color: #0070f3;
  text-decoration: underline;
`;

const ChartBox = styled.div`
  width: 100%;
  padding: 20px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 16px rgba(59, 130, 246, 0.6);
`;

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const [showProgressModal, setShowProgressModal] = useState(false);
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({});
  const [file, setFile] = useState(null);
  const [achievementFile, setAchievementFile] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);

  const [currentWeight, setCurrentWeight] = useState("");
  const [squat, setSquat] = useState("");
  const [bench, setBench] = useState("");
  const [deadlift, setDeadlift] = useState("");
  const [progressData, setProgressData] = useState([]);

  const [bmiMessage, setBmiMessage] = useState("");

  useEffect(() => {
    fetchProgress();
  }, []);

  const fetchProgress = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/profile",{
        withCredentials: true
      });
      setProgressData(res.data);
    } catch (error) {
      console.error("Error fetching progress:", error);
    }
  };

  const handleProgressSubmit = async (e) => {
    e.preventDefault();
    if (!profile || !profile.height) {
      alert("User height not available for BMI calculation.");
      return;
    }

    // Convert height from meters to centimeters
    const heightInCm = parseFloat(profile.height) * 100;
    const weightInKg = parseFloat(currentWeight);

    // Calculate BMI
    const bmiValue = (weightInKg / ((heightInCm / 100) * (heightInCm / 100))).toFixed(2);
    setBmiMessage(getBmiMessage(bmiValue));

    const newEntry = {
      currentWeight,
      squat,
      bench,
      deadlift,
      bmi: bmiValue,
    };

    try {
      await axios.post("http://localhost:8080/api/profile", newEntry,{
        withCredentials: true
      });
      fetchProgress();
      setShowProgressModal(false);
    } catch (error) {
      console.error("Error saving progress:", error);
    }
  };

  const getBmiMessage = (bmi) => {
    if (bmi < 18.5) {
      return "You are underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "You are fit";
    } else {
      return "You are overweight";
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getUserDetails();
        setProfile(res.data);
        setFormData(res.data);
        setPreviewImg(res.data.img);
      } catch (err) {
        console.error("Failed to fetch user details", err);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "img" && files?.[0]) {
      setFile(files[0]);
      setPreviewImg(URL.createObjectURL(files[0]));
    } else if (name === "achievements" && files?.[0]) {
      setAchievementFile(files[0]);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleUpdate = async () => {
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("age", formData.age);
      data.append("height", formData.height);
      data.append("weight", formData.weight);
      if (file) data.append("img", file);
      if (achievementFile) data.append("achievements", achievementFile);

      const res = await UserUpdate(data);
      setProfile(res.data);
      setShowModal(false);
      alert("Profile updated!");
    } catch (err) {
      console.error(err);
      alert("Failed to update profile.");
    }
  };

  if (!profile) return <Container>Loading...</Container>;

  return (
    <Container>
      {/* LEFT SIDE - PROFILE */}
      <LeftSide>
        <ProfileCard>
          <EditButton onClick={() => setShowModal(true)}>✏️</EditButton>
          <Avatar src={profile.img || "https://via.placeholder.com/100"} />
          <Name>{profile.name}</Name>
          <Info>📧 {profile.email}</Info>
          <Info>🎂 Age: {profile.age}</Info>
          <Info>📏 Height: {profile.height} m</Info>
          <Info>⚖️ Weight: {profile.weight} kg</Info>
          <Info>🧮 BMI: {profile.bmi}</Info>
          <Info>{bmiMessage}</Info> {/* Display BMI message */}
          {profile.achievements && (
            <>
              <Label>🏆 Achievements</Label>
              <AchievementFile href={profile.achievements} target="_blank">
                View Uploaded Achievement
              </AchievementFile>
            </>
          )}
          <UpdateButton style={{ marginTop: "20px" }} onClick={() => setShowProgressModal(true)}>
            Update Progress
          </UpdateButton>
        </ProfileCard>
      </LeftSide>

      {/* RIGHT SIDE - CHART */}
      <RightSide>
        <ChartBox>
          <h2>Progress Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="createdAt" tickFormatter={(tick) => tick.slice(0, 10)} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="squat" stroke="#3B82F6" name="Squat" />
              <Line type="monotone" dataKey="bench" stroke="#10B981" name="Bench" />
              <Line type="monotone" dataKey="deadlift" stroke="#EF4444" name="Deadlift" />
              <Line type="monotone" dataKey="bmi" stroke="#F59E0B" name="BMI" />
            </LineChart>
          </ResponsiveContainer>
        </ChartBox>
      </RightSide>

      {/* PROFILE EDIT MODAL */}
      {showModal && (
        <ModalOverlay>
          <Modal>
            <CloseButton onClick={() => setShowModal(false)}>×</CloseButton>
            <h2>Update Profile</h2>
            <Input type="text" name="name" value={formData.name || ""} onChange={handleChange} placeholder="Name" />
            <Input type="email" name="email" value={formData.email || ""} onChange={handleChange} placeholder="Email" />
            <Input type="number" name="age" value={formData.age || ""} onChange={handleChange} placeholder="Age" />
            <Input type="number" name="height" value={formData.height || ""} onChange={handleChange} placeholder="Height (in meters)" />
            <Input type="number" name="weight" value={formData.weight || ""} onChange={handleChange} placeholder="Weight (in kg)" />
            <Label>Update Profile Photo</Label>
            <Input type="file" name="img" onChange={handleChange} />
            {previewImg && <PreviewImage src={previewImg} alt="Preview" />}
            <Label>Upload Achievement</Label>
            <Input type="file" name="achievements" onChange={handleChange} />
            <UpdateButton onClick={handleUpdate}>Update</UpdateButton>
          </Modal>
        </ModalOverlay>
      )}

      {/* PROGRESS UPDATE MODAL */}
      {showProgressModal && (
        <ModalOverlay>
          <Modal>
            <CloseButton onClick={() => setShowProgressModal(false)}>×</CloseButton>
            <h2>Update Progress</h2>
            <Input
              type="number"
              value={currentWeight}
              placeholder="Current Weight"
              onChange={(e) => setCurrentWeight(e.target.value)}
            />
            <Input
              type="number"
              value={squat}
              placeholder="Squat (kg)"
              onChange={(e) => setSquat(e.target.value)}
            />
            <Input
              type="number"
              value={bench}
              placeholder="Bench (kg)"
              onChange={(e) => setBench(e.target.value)}
            />
            <Input
              type="number"
              value={deadlift}
              placeholder="Deadlift (kg)"
              onChange={(e) => setDeadlift(e.target.value)}
            />
            <UpdateButton onClick={handleProgressSubmit}>Submit</UpdateButton>
          </Modal>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default Profile;
