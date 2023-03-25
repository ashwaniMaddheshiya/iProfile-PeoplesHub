import React from "react";
import classes from "./Home.module.css";
import ProfileList from "../components/ProfileList";
import Navbar from "../components/Navbar";

const Home = (props) => {
  const navResHandler = (navres) => {
    props.onHomeRes(navres);
  }
  
  return (
    <>
      <div className={classes.header}>
        <Navbar onNavRes = {navResHandler}  />
      </div>
      <div className={classes.container}>
        <ProfileList />
      </div>
    </>
  );
};

export default Home;
