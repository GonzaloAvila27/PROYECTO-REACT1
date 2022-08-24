import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQkwSuDegA_B95mYHrXZgVQbqfi5zxEmo",
  authDomain: "final-reactcoder.firebaseapp.com",
  projectId: "final-reactcoder",
  storageBucket: "final-reactcoder.appspot.com",
  messagingSenderId: "451508888743",
  appId: "1:451508888743:web:dd0f51eab4e17c158a6782"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
<>
  {/*<React.StrictMode>*/}
    <App />
  {/* </React.StrictMode>*/}
</>
)
