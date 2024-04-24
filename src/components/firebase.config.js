// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
// apiKey: "AIzaSyDUfotwYjA9162XG06J1LZFmCcTOnsFcy4",
//  authDomain: "coffee-store-269e7.firebaseapp.com",
// projectId: "coffee-store-269e7",
//storageBucket: "coffee-store-269e7.appspot.com",
//messagingSenderId: "274754578407",
// appId: "1:274754578407:web:d2c78188205fd16ab53f42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
