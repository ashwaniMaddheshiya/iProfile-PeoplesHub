import React from "react";
import classes from "./Navbar.module.css";
import Button from "./UI/Button";

const Navbar = (props) => {
  const logoutHandler = () => {
    props.onNavRes(false);
  }
  return (
    <>
      <header className={classes.navbar}>
        <h1>iProfile</h1>
        <Button onClick={logoutHandler}>Logout</Button>
      </header>
    </>
  );
};

export default Navbar;
