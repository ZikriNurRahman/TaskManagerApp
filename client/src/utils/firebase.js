// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-9bb3d.firebaseapp.com",
  projectId: "taskmanager-9bb3d",
  storageBucket: "taskmanager-9bb3d.firebasestorage.app",
  messagingSenderId: "942595717141",
  appId: "1:942595717141:web:5d4cbf5262c8539a01f61c",
  measurementId: "G-7S62LKD0CW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
