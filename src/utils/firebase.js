import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ3bUnfwZWzy5jSYAoQOkg3LRO9wWk1ng",
  authDomain: "tenedores-d0df6.firebaseapp.com",
  projectId: "tenedores-d0df6",
  storageBucket: "tenedores-d0df6.firebasestorage.app",
  messagingSenderId: "851416623502",
  appId: "1:851416623502:web:ff2f73c86418366baedcdf",
};

export const initFirebase = initializeApp(firebaseConfig);
