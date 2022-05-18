import React from "react";
import { useDispatch } from "react-redux";
import { friendActions } from "../app/friendSlice";
import classes from "./FriendIcon.module.css";

const FriendIcon = (props) => {
  const dispatch = useDispatch();

  const friendSelector = () => {
    dispatch(
      friendActions.setFriendInfo({
        friendEmail: props.friendEmail,

        friendSelected: true,
      })
    );
  };

  return (
    <div className={classes.container} onClick={friendSelector}>
    <div className={classes.friendIcon}>

     <p>
      {props.friendEmail.replace('@gmail.com', '')} 
     </p>
    </div>
    </div>
  );
};

export default FriendIcon;
