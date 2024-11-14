import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDo2wBZa5wKSBqrZ0wSKXD1HCqrg2NWda4",
  authDomain: "auth-d7404.firebaseapp.com",
  projectId: "auth-d7404",
  storageBucket: "auth-d7404.firebasestorage.app",
  messagingSenderId: "130631851941",
  appId: "1:130631851941:web:54ab80dfdc34440bfc924c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);