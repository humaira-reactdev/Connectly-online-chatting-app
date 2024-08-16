// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCApEA222GjtBIlPsH5C5aePh3wCokqEYI",
  authDomain: "connectly-online-chatting-app.firebaseapp.com",
  projectId: "connectly-online-chatting-app",
  storageBucket: "connectly-online-chatting-app.appspot.com",
  messagingSenderId: "50741574061",
  appId: "1:50741574061:web:abcf483d0d051fcf638924",
  measurementId: "G-DBZEL3JS1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;