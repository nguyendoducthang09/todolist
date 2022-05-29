// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcU6r15p8hgFIAjW6i8qkJ3S1KmxUfGK0",
  authDomain: "todolist-b6475.firebaseapp.com",
  projectId: "todolist-b6475",
  storageBucket: "todolist-b6475.appspot.com",
  messagingSenderId: "397045359173",
  appId: "1:397045359173:web:b1f83f7bbb3ed11d39b92c",
  measurementId: "G-QCP0TELQ5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var db = firebase.firestore();
