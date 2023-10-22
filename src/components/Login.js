import React, { useState } from "react";
import "./Login.css";
import { Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [realUsername, setRealUsername] = useState("loonslab");
  const [realPassword, setRealPassword] = useState("1234");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  window.addEventListener("popstate", function (event) {
    // This code will run when the user navigates using the browser's back/forward buttons.
    window.location.reload();
  });

  const access = () => {
    if (realUsername === username && realPassword === password) {
      navigate("./weather");
    } else {
      alert("Incorrect password & usrname");
    }
  };

  return (
    <div className="login">
      <br />

      <div className="login-box">
        <h2>Sign In</h2>
        <br />
        <div>
          <Input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            placeholder="Username"
          />
          <br />
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
          />
          <br />
          <br />
          <Button className="login-btn" onClick={access}>
            Login
          </Button>
        </div>
      </div>
      <div className="main-header">
        <h2>BASIC ESSENTIALS</h2>
        <p>
          WEATHER <br />
          FORECASTS
        </p>
        <h5>INFORMATIONS</h5>
      </div>
    </div>
  );
};

export default Login;
