
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getUserDetails, UserUpdate } from "../api";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const ProfileCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  max-width: 400px;
  width: 100%;
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
  background: rgba(0,0,0,0.6);
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

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({});
  const [file, setFile] = useState(null);
  const [achievementFile, setAchievementFile] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);

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
      <ProfileCard>
        <EditButton onClick={() => setShowModal(true)}>✏️</EditButton>
        <Avatar src={profile.img || "https://via.placeholder.com/100"} />
        <Name>{profile.name}</Name>
        <Info>📧 {profile.email}</Info>
        <Info>🎂 Age: {profile.age}</Info>
        <Info>📏 Height: {profile.height} m</Info>
        <Info>⚖️ Weight: {profile.weight} kg</Info>
        <Info>🧮 BMI: {profile.bmi}</Info>
        {profile.achievements && (
          <>
            <Label>🏆 Achievements</Label>
            <AchievementFile href={profile.achievements} target="_blank">
              View Uploaded Achievement
            </AchievementFile>
          </>
        )}
      </ProfileCard>

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
    </Container>
  );
};

export default Profile;
