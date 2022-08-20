// Import the functions you need from the SDKs you need

import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaFDZeWHZWVozCcuZ9dV_hoG-s06FrO1w",
  authDomain: "todolist-6ddb1.firebaseapp.com",
  projectId: "todolist-6ddb1",
  storageBucket: "todolist-6ddb1.appspot.com",
  messagingSenderId: "576009535452",
  appId: "1:576009535452:web:6841e72c9dcd92b2e3d919",
  measurementId: "G-R3DYG1KF1F",
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();
