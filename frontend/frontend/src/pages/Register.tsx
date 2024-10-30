import React, { useState} from "react";
import FormField from "../components/Form";
import './forms.css'
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [message, setMessage] = useState('');
  const [clr, setClr] = useState('red');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email');
    const username = formData.get('username');
    const password = formData.get('password');
    const rePassword = formData.get('rePassword');

    try{
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {'Content-Type': "application/json"},
        body: JSON.stringify({email, username, password, rePassword}),
      });
      const result = await response.json();
      if(response.ok){
        setClr('green');
        setMessage('Registration successful');
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      }else{
        setClr('red');
        setMessage(result.message || 'Registration failed');
      }
    } catch(err){
      setClr('red');
      setMessage('Error registering');
    }
  };
  return (
    <div className="container">
      <form action="/register" method="post" onSubmit={handleSubmit}>
        <FormField
          name="email"
          type="email"
          label="Email "
          ph="Napište váš email"
        />
        <FormField
          name="username"
          type="text"
          label="Username  "
          ph="Napište váše uživatelské jméno"
        />
        <FormField name="password" type="password" label="Heslo " ph="Heslo" />
        <FormField
          name="rePassword"
          type="password"
          label="Heslo znovu "
          ph="Heslo znovu"
        />
        <button type="submit">Register</button>
      </form>
      <p  style={{color: clr, textAlign: "center", fontWeight: "bold"}}>{message}</p>
    </div>
  );
};

export default Register;
