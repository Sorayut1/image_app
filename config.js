import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB8lsHJaF2vtU9rq6x9dOfM1FJACnb-qHk",
    authDomain: "react-firebase-storage-627a3.firebaseapp.com",
    projectId: "react-firebase-storage-627a3",
    storageBucket: "react-firebase-storage-627a3.appspot.com",
    messagingSenderId: "1035055143564",
    appId: "1:1035055143564:web:83cc4741ebd86d24cf79a9",
    measurementId: "G-8T2XQK5600"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }
  export {firebase};