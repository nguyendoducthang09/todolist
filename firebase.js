// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeY9aMI8nGoFnrIenTJTUh7pX2O2KGaDY",
  authDomain: "todolist-df88b.firebaseapp.com",
  databaseURL: "https://todolist-df88b-default-rtdb.firebaseio.com",
  projectId: "todolist-df88b",
  storageBucket: "todolist-df88b.appspot.com",
  messagingSenderId: "449168465181",
  appId: "1:449168465181:web:5fb96ec5e70e6b440695f4",
  measurementId: "G-JPPEB82675"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();