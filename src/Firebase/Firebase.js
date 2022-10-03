import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZMnEXUugt0M_gf_6Vx-QrdTxNtVYM2gg",
  authDomain: "e-commerce-9d7d7.firebaseapp.com",
  projectId: "e-commerce-9d7d7",
  storageBucket: "e-commerce-9d7d7.appspot.com",
  messagingSenderId: "212070497307",
  appId: "1:212070497307:web:e3b3d54d3d97a62a3d8cbe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth };
