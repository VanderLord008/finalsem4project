import React, { useEffect, useState } from "react";
import classes from "./FriendsBar.module.css";
import db from "../firebase";
import { useSelector } from "react-redux";
import FriendIcon from "./FriendIcon";

const FriendsBar = () => {
  const userEmail = useSelector((state) => state.user.userEmail);
  const [friends, setFriends] = useState([]);
 
  useEffect(() => {
    db.collection("users")
      .doc(userEmail)
      .collection("friends")
      .onSnapshot((snapshot) =>
        setFriends(snapshot.docs.map((doc) => doc.data()))
      );
  }, [setFriends, userEmail]);

  return (
    <div className={classes.container}>
    <div className={classes.friendText}>
    <p>
      Friends
    </p>
    </div>
    <div className={classes.friends}>


<p>

      {friends.map((friend) => (
        <FriendIcon friendEmail={friend.friendEmail} />
      ))}
</p>

    </div>
   
    </div>
  );
};

export default FriendsBar;
