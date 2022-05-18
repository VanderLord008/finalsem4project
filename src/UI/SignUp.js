import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import db, { auth } from "../firebase";
import classes from "./Signup.module.css";

const SignUp = (props) => {
  const [loading,setLoading]= useState(false);
  const [warning,setWarning]= useState('');
  const signUpHandler = (e) => {
    e.preventDefault();
setLoading(true)
    const email = e.target[0].value;
    const password = e.target[1].value;
    if(!email || !password ){
      setWarning('please enter both email and password')
      setLoading(false)
      return;
    }
    if(password.length<6 ){
      setWarning('password must be 6 or more characters')
      setLoading(false)
      return;
    }


    auth.createUserWithEmailAndPassword(email, password).catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);

      const errorMessage = error.message;
      console.log(errorMessage);
      setWarning('please enter correct details')
      setLoading(false)
      // ..
    });
  };
  return (
    <div className={classes.container}>
      <form onSubmit={signUpHandler}>
        <p>Email</p>
        <input placeholder="email"></input>
        <p>Password</p>
        <input placeholder="password"></input>
        <div className={classes.signupButton}>

        <span>{ warning?`${warning}` : '' }</span>
        <button type="submit" className={loading? classes.processing : ''} >{!loading? 'Sign up' : 'Processing'}</button>
        </div>
        <span onClick={props.signUpShower}>already have an account?</span>
      </form>
    </div>
  );
};

export default SignUp;
