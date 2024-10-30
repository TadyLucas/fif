import FormField from "../components/Form";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [message, setMessage] = useState('');
  const [clr, setClr] = useState('red');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const checkToken = () => {
    const token = localStorage.getItem('token');
    setLoggedIn(!!token);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const usrOrEmail = formData.get('usrOrEmail') as string;
    const password = formData.get('password') as string;

    try{
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {'Content-Type': "application/json"},
        body: JSON.stringify({usrOrEmail, password}),
      });

      const result = await response.json();
      if(response.ok){
        checkToken();
        setClr('green');
        setMessage('Login successful');
        localStorage.setItem('token', result.token);
        window.dispatchEvent(new Event('storage'));
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      }else{
        setClr('red');
        setMessage(result.message || 'Login failed');
      }
    }catch(err){
      setClr('red');
      setMessage('Error logging in')
    }
  };
  return (
    <div className="container">
      <form action="/login" method="post" onSubmit={handleSubmit}>
        <FormField
          name="usrOrEmail"
          type="text"
          label="Přihlašte se s username nebo emailem  "
          ph="Napište váše uživatelské jméno"
        />
        <FormField name="password" type="password" label="Heslo " ph="Heslo" />
        <button type="submit">Login</button>
      </form>
      <p  style={{color: clr, textAlign: "center", fontWeight: "bold"}}>{message}</p>
    </div>
  );
};

export default Login;
