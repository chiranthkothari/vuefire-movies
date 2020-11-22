import firebase from 'firebase/app';
import 'firebase/firestore';

export const db= firebase.initializeApp({
    apiKey: "AIzaSyB2WiECV3z574s3cmEIGh6adol8mSyz1wI",
    authDomain: "movies-ea0a0.firebaseapp.com",
    databaseURL: "https://movies-ea0a0.firebaseio.com",
    projectId: "movies-ea0a0",
    storageBucket: "movies-ea0a0.appspot.com",
    messagingSenderId: "971467144985",
    appId: "1:971467144985:web:9de789f04f52d6960b4f88"
  }).firestore();

export const moviesDb= db.collection('movies');

