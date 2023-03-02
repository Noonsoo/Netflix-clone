import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdd_9c36GSaMNkAOQxQmdKk5WmVGjfvfg",
  authDomain: "netflix-yt-f8e8d.firebaseapp.com",
  projectId: "netflix-yt-f8e8d",
  storageBucket: "netflix-yt-f8e8d.appspot.com",
  messagingSenderId: "715088378167",
  appId: "1:715088378167:web:fbda03458253181c9fc2b2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth, db };
