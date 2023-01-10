// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYT028WF8CmPMmrUPJ1PrmFsea6GNxBsU",
    authDomain: "ginni-385f7.firebaseapp.com",
    projectId: "ginni-385f7",
    storageBucket: "ginni-385f7.appspot.com",
    messagingSenderId: "684958702882",
    appId: "1:684958702882:web:a156dfa3dd2ace868e597b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;