import React from "react";
import FormField from "../components/Form";
import './forms.css'
const Register = () => {
  return (
    <div className="container">
      <form action="/register" method="post">
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
    </div>
  );
};

export default Register;
