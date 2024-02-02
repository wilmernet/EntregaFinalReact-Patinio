// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1GUIl6sRu4F3jNyEykNfvw25UrlutNxE",
  authDomain: "datapetstore.firebaseapp.com",
  projectId: "datapetstore",
  storageBucket: "datapetstore.appspot.com",
  messagingSenderId: "625526991830",
  appId: "1:625526991830:web:005f5d41760294b45f5277"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);