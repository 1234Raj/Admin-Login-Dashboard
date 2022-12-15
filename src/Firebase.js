// Import the functions you need from the SDKs you need
 
import { initializeApp } from "firebase/app" ;
 
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth';
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMv5qQLMJEKq4uUkyU9a6IlhSx7Z1x1Jk",
  authDomain: "ecommerceweb-d2a0b.firebaseapp.com",
  projectId: "ecommerceweb-d2a0b",
  storageBucket: "ecommerceweb-d2a0b.appspot.com",
  messagingSenderId: "547286996809",
  appId: "1:547286996809:web:694a9f023eca95dfaeac98",
  databaseURL:"https://ecommerceweb-d2a0b-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const database = getDatabase(app);
 export default db;
export {app,auth,database};