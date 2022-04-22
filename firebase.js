// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGKPMZIJJiLgul2lnHqxVdmCFlwqbYo5U",
    authDomain: "to-do-list-7ce68.firebaseapp.com",
    projectId: "to-do-list-7ce68",
    storageBucket: "to-do-list-7ce68.appspot.com",
    messagingSenderId: "156281341311",
    appId: "1:156281341311:web:9c66e28d7c61d7a365c64a",
    measurementId: "G-97VZ9BQ8N6"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();