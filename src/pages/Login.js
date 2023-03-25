import React, { useState } from "react";
import classes from "./Login.module.css";
import Button from "../components/UI/Button";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [emailInput, setEmailInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const navigate = useNavigate();

  const emailChangeHandler = (event) => {
    setEmailInput(event.target.value);
  }

  const passChangeHandler = (event) => {
    setPassInput(event.target.value);
  }

   const handlerSubmit = () => {
    if(emailInput === "" || passInput === ""){
      navigate("/");
      return;
    }
    props.parentCallback(true);
    // navigate('/home')
  }
  return (
    <div className={classes.loginBox}>
      <h2>Login</h2>
      <form onSubmit={handlerSubmit}>
        <div className={classes.userBox}>
          <input type="text" name="" onChange={emailChangeHandler}/>
          <label>Username</label>
        </div>
        <div className={classes.userBox}>
          <input type="password" name="" onChange={passChangeHandler} />
          <label>Password</label>
        </div>
        <Button>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Login;
