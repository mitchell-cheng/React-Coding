import React, { useState } from "react";

function PasswordStrengthChecker() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const evaluatePasswordStrength = () => {
    if (password.length < 8) {
      setStrength("Weak");
    } else if (password.length >= 8 && password.length <= 12) {
      setStrength("Medium");
    } else {
      setStrength("Strong");
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    evaluatePasswordStrength();
  };

  return (
    <div>
      <input type="password" value={password} onChange={handlePasswordChange} />
      <p>Password Strength: {strength}</p>
      {strength === "Weak" && (
        <p style={{ color: "red" }}>Password is too short!</p>
      )}
      {strength === "Medium" && (
        <p style={{ color: "orange" }}>Password is okay!</p>
      )}
      {strength === "Strong" && (
        <p style={{ color: "green" }}>Password is strong!</p>
      )}
    </div>
  );
}

export default PasswordStrengthChecker;