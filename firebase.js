import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-65b23.firebaseapp.com",

  projectId: "react-chat-65b23",

  storageBucket: "react-chat-65b23.appspot.com",

  messagingSenderId: "91531209073",

  appId: "1:91531209073:web:7fc775dabc39a3aa082ed0",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
