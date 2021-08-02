import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDDdpVuu9hbzA4IEuDSfhnJzPPEfEvp324",
    authDomain: "pet-finder-62202.firebaseapp.com",
    projectId: "pet-finder-62202",
    storageBucket: "pet-finder-62202.appspot.com",
    messagingSenderId: "336908360313",
    appId: "1:336908360313:web:33f6a5883454a1811392a8",
    measurementId: "G-KJQQQHKG9F"
  };


  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
    db,
    googleAuthProvider,
    firebase
  }