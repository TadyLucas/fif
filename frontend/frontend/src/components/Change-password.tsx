import "../pages/settings.css";
import React, { useState, FormEvent } from "react";

const ChangePassword: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [clr, setClr] = useState("red");

  const togglePasswordChange = () => {
    setIsOpen(!isOpen);
  };
  const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log("submit");
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/settings/change-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          body: JSON.stringify({
            currentPassword,
            newPassword,
            confirmPassword,
          }),
        }
      );
      const data = await response.json();

      if (response.ok) {
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setClr("green");
        setMessage(data.message);
      } else {
        setClr("red");
        setMessage(data.message);
      }
    } catch (err) {
      console.log("Error: ", err);
    }
  };
  return (
    <div className="change-password">
      <div className="toggle-header" onClick={togglePasswordChange}>
        <h3>Change Password</h3>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <form id="change-password" onSubmit={HandleSubmit}>
          <label htmlFor="current-password">Current Password</label>
          <input
            type="password"
            id="current-password"
            name="current-password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
          <label htmlFor="new-password">New Password</label>
          <input
            type="password"
            id="new-password"
            name="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {
            <p style={{ color: clr, textAlign: "center", fontWeight: "bold" }}>
              {message}
            </p>
          }
          <button type="submit">Save Changes</button>
        </form>
      )}
    </div>
  );
};

export default ChangePassword;
