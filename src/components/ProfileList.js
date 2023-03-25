import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ProfileCard from "./ProfileCard";
import classes from "./ProfileList.module.css";

const ProfileList = (props) => {
  const [profile, setProfile] = useState([]);

  let page = 1;
  const getUsers = async () => {
    const response = await fetch(
      `https://randomuser.me/api/?results=21&page=${page}`
    );
    const data = await response.json();

    setProfile([...profile, ...data.results]);
    page = page + 1;
    console.log(data.results);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div>
        <InfiniteScroll
          className={classes.container}
          dataLength={profile.length}
          next={() => getUsers()}
          hasMore={true}
          delay={1000}
          loader={<h2 style={{ color: "white" }}>Loading...</h2>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {profile.map((item) => {
            return (
              <div className={classes.cardContainer}>
                <ProfileCard
                  key={item.email}
                  id={item.id.value}
                  name={
                    item.name.title +
                    " " +
                    item.name.first +
                    " " +
                    item.name.last
                  }
                  img={item.picture.large}
                  email={item.email}
                  city={item.location.city}
                  country={item.location.country}
                />
              </div>
            );
          })}
        </InfiniteScroll>
      </div>
    </>
  );
};

export default ProfileList;
