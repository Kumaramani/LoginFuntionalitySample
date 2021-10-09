import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
  apiKey: "AIzaSyDv9PxBrqlLQgm1kezwSQznxCUrxiYCpiQ",
  authDomain: "tato-auth.firebaseapp.com",
  projectId: "tato-auth",
  storageBucket: "tato-auth.appspot.com",
  messagingSenderId: "21031388125",
  appId: "1:21031388125:web:e4e8535d58965cbaed6c34"
};

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
  </FirebaseAppProvider>,
  document.getElementById('root')
);
