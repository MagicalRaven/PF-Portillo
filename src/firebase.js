import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkkyksIumfPznhRE1kBdFBJ9Z-H9aWco0",
  authDomain: "pf-portillo.firebaseapp.com",
  projectId: "pf-portillo",
  storageBucket: "pf-portillo.appspot.com",
  messagingSenderId: "226586311442",
  appId: "1:226586311442:web:046b0eac633536a9bfd1cb"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };