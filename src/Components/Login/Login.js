import React, { useRef, useState } from "react";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [isLogIn, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const loginHandeler = () => {
    setIsLogin(!isLogIn);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    let url;
    if (isLogIn) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCvzryAZ4dVWRP2PJ-eM4EE78m3NrDF5F0";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCvzryAZ4dVWRP2PJ-eM4EE78m3NrDF5F0";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json().then((data) => {
          alert("authentication Successfull");
          navigate("/");
        });
      } else {
        return res.json().then((data) => {
          alert(data.error.message);
          alert("SignUp Here");
          setIsLogin(!isLogIn);
        });
      }
    });
  };
  return (
    <div>
      <div>
        <input
          placeholder="Email Id"
          className={classes.email}
          ref={emailRef}
        />
      </div>
      <div>
        <input
          placeholder="Password"
          className={classes.password}
          ref={passwordRef}
        />
      </div>

      <button className={classes.login} onClick={submitHandler}>
        {isLogIn ? "LogIn" : "SignIn"}
      </button>
      <button
        style={{ marginLeft: "10px" }}
        className={classes.signup}
        onClick={loginHandeler}
      >
        {isLogIn ? "New User" : "Existing"}
      </button>
    </div>
  );
};

export default Login;
