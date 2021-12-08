import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAL_muN2uy2e-gFZiNA7OvA4sVWaIi3_N0",
  authDomain: "netflixpirata-5f3ac.firebaseapp.com",
  projectId: "netflixpirata-5f3ac",
  storageBucket: "netflixpirata-5f3ac.appspot.com",
  messagingSenderId: "317587128355",
  appId: "1:317587128355:web:e8114f97353b5f0dd73196",
  measurementId: "G-NS02RW0FRD",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
