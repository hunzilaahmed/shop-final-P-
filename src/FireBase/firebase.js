// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZzPKf0lww2UW9uquiji6U8i4qaSUJQMU",
  authDomain: "shop-944fa.firebaseapp.com",
  projectId: "shop-944fa",
  storageBucket: "shop-944fa.appspot.com",
  messagingSenderId: "870064845843",
  appId: "1:870064845843:web:894e42ea04c5c286a67be6",
  measurementId: "G-P95VK7L4CJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { db, auth, storage,app };

