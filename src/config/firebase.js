// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAV-2-4vuhuhRDcNzASpr1skcZFxwU7dGA",
  authDomain: "car-rental-cdb9f.firebaseapp.com",
  databaseURL: "https://fir-auth-5c1b2-default-rtdb.firebaseio.com",
  projectId: "car-rental-cdb9f",
  storageBucket: "car-rental-cdb9f.appspot.com",
  messagingSenderId: "129943135161",
  appId: "1:129943135161:web:16ade5789f42b5ab770c68"
  
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };