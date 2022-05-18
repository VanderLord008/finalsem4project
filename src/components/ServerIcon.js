import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { channelActions } from "../app/channelSlice";
import { serverActions } from "../app/serverSlice";
import db, { auth } from "../firebase";
import classes from "./ServerIcon.module.css";

const ServerIcon = (props) => {
  const dispatch = useDispatch();
  function getFirstLetters(str) {
    const firstLetters = str
      .split(' ')
      .map(word => word[0])
      .join('');
  
    return firstLetters;
  }
  const serverSelector = () => {
    dispatch(
      serverActions.setServerInfo({
        serverId: props.serverId,
        serverName: props.serverName,
      })
    );
    dispatch(
      channelActions.setChannelInfo({
        channelId: props.channelId,
        channelName: props.channelName,
      })
    );
    props.showServerLayout();
  };
  return (
    <div className={classes.addIcon} onClick={serverSelector}>
      {getFirstLetters( props.serverName )}
    </div>
  );
};

export default ServerIcon;
