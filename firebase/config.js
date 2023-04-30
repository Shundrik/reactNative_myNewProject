// import * as firebase from "firebase";


// firebase.initializeApp(firebaseConfig);
// export default firebase;

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgdtKHbMMCwa6tmgpyg6ixfrYr05jcxjI",
  authDomain: "mynewproject-86a2d.firebaseapp.com",
  projectId: "mynewproject-86a2d",
  storageBucket: "mynewproject-86a2d.appspot.com",
  messagingSenderId: "794851026804",
  appId: "1:794851026804:web:8f2a1626ca079b48842e21",
  measurementId: "G-JRB7VTL5HW"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);
export  const analytics = getAnalytics(app);
