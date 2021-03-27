import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBDwH5RmphvnaGUXv_jFcfzfXHwwP4_w8k',
  authDomain: 'grapee-6d9c9.firebaseapp.com',
  projectId: 'grapee-6d9c9',
  storageBucket: 'grapee-6d9c9.appspot.com',
  messagingSenderId: '571249473424',
  appId: '1:571249473424:web:8b4991c2c9a3a8aced2515',
  measurementId: 'G-S0JXDZH399',
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
