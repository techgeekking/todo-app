import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDp4B6wFzTrENSZVZKKt3w0udKDm4tQVn8",
  authDomain: "todo-app-2fca8.firebaseapp.com",
  databaseURL: "https://todo-app-2fca8.firebaseio.com",
  projectId: "todo-app-2fca8",
  storageBucket: "todo-app-2fca8.appspot.com",
  messagingSenderId: "664216528090",
  appId: "1:664216528090:web:3d56a47f2b89be43ceb1e3",
  measurementId: "G-EN5NNC6LLT",
});

const db = firebaseApp.firestore();

export default db;