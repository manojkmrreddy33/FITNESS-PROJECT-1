import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";
import { UserSignUp } from "../api";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/reducers/userSlice";

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
`;

const Span = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 90};
`;

const SignUp = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageUploading, setImageUploading] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageUploading(true);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "fitnessapp");
      formData.append("cloud_name", "dnf7gyrb1");

      try {
        const response = await fetch("https://api.cloudinary.com/v1_1/dnf7gyrb1/image/upload", {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        setImageUrl(data.secure_url);
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Failed to upload image. Please try again.");
      } finally {
        setImageUploading(false);
      }
    }
  };

  const validateInputs = () => {
    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return false;
    }
    if (!imageUrl) {
      alert("Please upload an image before signing up.");
      return false;
    }
    return true;
  };

  const handleSignUp = async () => {
    if (!validateInputs()) return;
    setLoading(true);
    setButtonDisabled(true);
    try {
      const res = await UserSignUp({ name, email, password, img: imageUrl });
      dispatch(loginSuccess(res.data));
      alert("Account Created Successfully");
    } catch (err) {
      alert(err.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false);
      setButtonDisabled(false);
    }
  };

  return (
    <Container>
      <div>
        <Title>Create New Account 👋</Title>
        <Span>Please enter details to create a new account</Span>
      </div>
      <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
        <TextInput label="Full name" placeholder="Enter your full name" value={name} handelChange={(e) => setName(e.target.value)} />
        <TextInput label="Email Address" placeholder="Enter your email address" value={email} handelChange={(e) => setEmail(e.target.value)} />
        <TextInput label="Password" placeholder="Enter your password" password value={password} handelChange={(e) => setPassword(e.target.value)} />
        
        {/* Image Upload Input */}
        <input type="file" accept="image/*" onChange={handleImageUpload} disabled={imageUploading} />
        {imageUploading && <Span>Uploading image...</Span>}
        {imageUrl && <img src={imageUrl} alt="Profile Preview" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />}

        <Button text="Sign Up" onClick={handleSignUp} isLoading={loading} isDisabled={buttonDisabled || imageUploading} />
      </div>
    </Container>
  );
};

export default SignUp;