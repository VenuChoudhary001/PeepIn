import firebase from "firebase";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAYM_jnqVIgLtWFrrp9BH7E4fm_fzUi80g",
  authDomain: "peep-694c9.firebaseapp.com",
  projectId: "peep-694c9",
  storageBucket: "peep-694c9.appspot.com",
  messagingSenderId: "268608600657",
  appId: "1:268608600657:web:817144b1bc5348c6af9670",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const serverTime = firebase.firestore.FieldValue.serverTimestamp;
const increment = firebase.firestore.FieldValue.increment;
const addArray = firebase.firestore.FieldValue.arrayUnion;
const removeArray = firebase.firestore.FieldValue.arrayRemove;
export { db, auth, storage, serverTime, increment, addArray, removeArray };
