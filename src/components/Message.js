import React from 'react'
import classes from './Message.module.css'
const Message = (props) => {

    function getTime(str) {
        let time = str.replace('GMT+0530 (India Standard Time)','');
        
        return time;
    }
    
    const getName=(str)=> {
        let name = str.replace('@gmail.com','');
    
      
        return name;
      }
  return (
    <div className={classes.container}>
    <div className={classes.messageInfo}>
    <div className={classes.name}>
        <span>{getName(props.sender)}</span>
    </div>
    <div className={classes.time}>
        <span>{ getTime(Date(props.time))}</span>
    </div>
    </div>
    <div className={classes.message}>
        <p>{props.message}</p>
    </div>
    </div>
  )
}

export default Message