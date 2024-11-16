import "./settings.css";
import React, { useState } from "react";
import ChangePassword from "../components/Change-password";

const Settings = () => {
  return (
    <div className="containeR">
      <h2>Settings</h2>
      <ChangePassword />
    </div>
  );
};

export default Settings;
