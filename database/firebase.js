// database/firebaseDb.js

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCrxfl-wl4T6Lt6Obzt5p5BWhbeAAtYTzU",
  authDomain: "drugshoppamobile.firebaseapp.com",
  databaseURL: "https://drugshoppamobile.firebaseio.com",
  projectId: "drugshoppamobile",
  storageBucket: "drugshoppamobile.appspot.com",
  messagingSenderId: "958793113754",
  appId: "1:509064152783:android:cefa2c7e479279ee5899ba",
  measurementId: "G-2KTGHGPCRP"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
