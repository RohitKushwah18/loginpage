// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2pc2sKhjo15sOoj36vLMYjA5XjYtw7vk",
  authDomain: "auth-a229a.firebaseapp.com",
  projectId: "auth-a229a",
  storageBucket: "auth-a229a.appspot.com",
  messagingSenderId: "461609374870",
  appId: "1:461609374870:web:ba558897558fd6fbab5eb7",
  measurementId: "G-9XR945VG46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;