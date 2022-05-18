import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import InputBar from "./InputBar";
import classes from "./ServerChat.module.css";
import db from "../firebase";
import { v4 as uuid } from "uuid";
import Message from "./Message";

const ServerChat = () => {
  const channelName = useSelector((state) => state.channel.channelName);
  const channelId = useSelector((state) => state.channel.channelId);
  const serverName = useSelector((state) => state.server.serverName);
  const userEmail = useSelector((state) => state.user.userEmail);

  const messageAdder = (e) => {
    e.preventDefault();
    const message = e.target[0].value;

    if (channelName) {
      db.collection("servers")
        .doc(serverName)
        .collection("channels")
        .doc(channelName)
        .collection("messages")
        .add({
          message: message,
          messageId: uuid(),
          sentBy: userEmail,
          createdAt: new Date().getTime() / 1000,
        });
    }
    e.target[0].value='';
  };

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelName) {
      db.collection("servers")
        .doc(serverName)
        .collection("channels")
        .doc(channelName)
        .collection("messages")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
          
        );
        console.log('messages are ' , messages);
    }
  }, [channelName, channelId, serverName]);

  return (
    <div className={classes.container}>
    <div className={classes.channelName}>
      {channelName}
    </div>
<div className={classes.channelChats}>

      {channelName &&
        messages.map((message) => (
          //channel.channelName
          <div  className={classes.msg} key={message.messageId} >
            
            <Message key={message.messageId} message={message.message} sender={message.sentBy} time = {message.createdAt} />
          </div>
        ))}
</div>
        <div className={classes.inputBar}>

      {channelName && <InputBar messageAdder={messageAdder} />}
        </div>
    </div>
  );
};

export default ServerChat;
