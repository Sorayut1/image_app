// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8lsHJaF2vtU9rq6x9dOfM1FJACnb-qHk",
  authDomain: "react-firebase-storage-627a3.firebaseapp.com",
  projectId: "react-firebase-storage-627a3",
  storageBucket: "react-firebase-storage-627a3.appspot.com",
  messagingSenderId: "1035055143564",
  appId: "1:1035055143564:web:83cc4741ebd86d24cf79a9",
  measurementId: "G-8T2XQK5600"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);