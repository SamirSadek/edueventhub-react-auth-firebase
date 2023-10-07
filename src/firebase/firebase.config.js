// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKDefbYW4eQhTPId8HHD37Xmr_Z0IQmUU",
  authDomain: "edueventhub.firebaseapp.com",
  projectId: "edueventhub",
  storageBucket: "edueventhub.appspot.com",
  messagingSenderId: "258113215915",
  appId: "1:258113215915:web:62579d7efbe2fb251a06ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;