import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyDtqAXvd9zhHnEGPE8Z03h8RSnR9zbEkqA",

//     authDomain: "discord-7e548.firebaseapp.com",
//     projectId: "discord-7e548",
//     storageBucket: "discord-7e548.appspot.com",
//     messagingSenderId: "145541039818",
//     appId: "1:145541039818:web:d5d0d73c77d031b70dd633",
//     measurementId: "G-1Z2YQRD247"
//   };
const firebaseConfig = {
  apiKey: "AIzaSyB7Qaxgyep3ysxWHFbeu3wB9t07RAUVcX0",
  authDomain: "akshat-3de21.firebaseapp.com",
  projectId: "akshat-3de21",
  storageBucket: "akshat-3de21.appspot.com",
  messagingSenderId: "969703403239",
  appId: "1:969703403239:web:1f24163010324c28937c42",
  measurementId: "G-WHD6GN2JS7"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
