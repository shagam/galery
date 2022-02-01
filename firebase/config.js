
import * as firebase from 'firebase/app';
//import 'firebase/storage'
//import 'firebase/firestore'
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

//export const db = getFirestore();
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfDrn6ssvddFe6TgloyxohoZ-7pRt-je0",
  authDomain: "galery-58c6a.firebaseapp.com",
  projectId: "galery-58c6a",
  storageBucket: "galery-58c6a.appspot.com",
  messagingSenderId: "830819266596",
  appId: "1:830819266596:web:82f7a64caa726aed4928b1",
  measurementId: "G-X2FBQJDQWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const projectStorage = getFirestore(); //firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
//export { projectStorage }