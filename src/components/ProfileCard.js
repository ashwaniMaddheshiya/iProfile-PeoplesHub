import React from "react";
import classes from "./ProfileCard.module.css";

const ProfileCard = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.left}>
        <img src={props.img} alt="" />
      </div>
      <div className={classes.right}>
        <div className={classes.upperRight}>
          <span>{props.name}</span>
          <span>{props.email}</span>
          <span>
            {props.city}, {props.country}
          </span>
        </div>
        <div className={classes.lowerRight}>
          <span>
            {props.id === null ? Math.ceil(Math.random() * 100000000) + "-I "  : props.id}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
