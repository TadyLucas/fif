import React from "react";
import FormField from "../components/Form";

const Login = () => {
  return (
    <div className="container">
      <form action="/login" method="post">
        <FormField
          name="usrOrEmail"
          type="text"
          label="Přihlašte se s username nebo emailem  "
          ph="Napište váše uživatelské jméno"
        />
        <FormField name="password" type="password" label="Heslo " ph="Heslo" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
