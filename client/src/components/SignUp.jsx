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
  padding: 40px;
  background: ${({ theme }) => theme.background_secondary};
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
`;

const Span = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const ImagePreview = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${({ theme }) => theme.primary};
`;

const FileInput = styled.input`
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background_primary};
  cursor: pointer;
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


  const validateInputs = () => {
    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return false;
    }
    return true;
  };

  const handleSignUp = async () => {
    if (!validateInputs()) return;
    setLoading(true);
    setButtonDisabled(true);
    try {
      const res = await UserSignUp({ name, email, password, img: "none"});
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
      <TextInput label="Full Name" placeholder="Enter your full name" value={name} handelChange={(e) => setName(e.target.value)} />
      <TextInput label="Email Address" placeholder="Enter your email address" value={email} handelChange={(e) => setEmail(e.target.value)} />
      <TextInput label="Password" placeholder="Enter your password" password value={password} handelChange={(e) => setPassword(e.target.value)} />
      <Button text="Sign Up" onClick={handleSignUp} isLoading={loading} isDisabled={buttonDisabled || imageUploading} />
    </Container>
  );
};

export default SignUp;
