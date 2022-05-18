import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../app/userSlice";
import { auth } from "../firebase";
import classes from "./Login.module.css";

const LogIn = (props) => {
  const dispatch = useDispatch();
  const [loading,setLoading]= useState(false);
  const [warning,setWarning]= useState('');

  const logInHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target[0].value;
    const password = e.target[1].value;
    if(!email || !password ){
      setWarning(true)
      setLoading(false)
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        dispatch(
          userActions.logIn({
            userEmail:cred.email,
          })
        )
        setLoading(false)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        setWarning(true)
        setLoading(false)
      });
  };

  return ( 
    <div className={classes.container}>
      <form onSubmit={logInHandler}>
        <p>Email</p>
        
        <input placeholder="email"></input>
        <p>Password</p>
        <input placeholder="password"></input>
        <div className={classes.loginButton}>
        <span>{warning? 'email or password is invalid' : ""}</span>
          <button type="submit" className={loading? classes.processing : ''} >{!loading? 'Login' : 'Loading'}</button>
        </div>
        <div className={classes.infoText}>
        <div className={classes.extraText}>

<div className={classes.whiteText}>

<div className={classes.info}>
          <span> Need an account?{" "}</span> 
</div>
<div className={classes.link}>
          <span onClick={props.signUpShower}>    Register Now</span>
</div>
</div>
        </div>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
