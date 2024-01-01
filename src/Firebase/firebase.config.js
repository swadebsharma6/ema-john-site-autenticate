
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiQA6Aez5QUVRnM-pQQpqVBO1Sh545eSU",
  authDomain: "ema-jhon-shopping-cb263.firebaseapp.com",
  projectId: "ema-jhon-shopping-cb263",
  storageBucket: "ema-jhon-shopping-cb263.appspot.com",
  messagingSenderId: "989164715579",
  appId: "1:989164715579:web:d304bf36cebf143558e61e"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;