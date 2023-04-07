// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCviDBGVZsRAiwT9Wtdem3mkLH9TJfA3ro',
  authDomain: 'vn-netflix.firebaseapp.com',
  projectId: 'vn-netflix',
  storageBucket: 'vn-netflix.appspot.com',
  messagingSenderId: '478126223426',
  appId: '1:478126223426:web:b9c302f84e33694e047ddb'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)