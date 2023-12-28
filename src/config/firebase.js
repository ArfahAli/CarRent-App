// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyBhMtCaK69ecEO874I9gyGIsl-xpyUexFw",
//   authDomain: "student-86884.firebaseapp.com",
//   databaseURL: "https://student-86884-default-rtdb.firebaseio.com",
//   projectId: "student-86884",
//   storageBucket: "student-86884.appspot.com",
//   messagingSenderId: "83218043839",
//   appId: "1:83218043839:web:c5f3b817fad0ed1e92870a",
//   measurementId: "G-TDMLR3CF8X"
// };
const firebaseConfig = {
  apiKey: "AIzaSyAVaO72DMOEde6kLMXG5GDvLuGRGZ_8Wfc",
  authDomain: "fir-auth-5c1b2.firebaseapp.com",
  databaseURL: "https://fir-auth-5c1b2-default-rtdb.firebaseio.com",
  projectId: "fir-auth-5c1b2",
  storageBucket: "fir-auth-5c1b2.appspot.com",
  messagingSenderId: "180486277327",
  appId: "1:180486277327:web:d671f202840533626d4fba"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };