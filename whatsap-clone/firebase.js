/* import firebase from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDehvhu3vjIuCsWo91dnZADuvv1f33i5t4",
  authDomain: "netflix-clone-99c79.firebaseapp.com",
  projectId: "netflix-clone-99c79",
  storageBucket: "netflix-clone-99c79.appspot.com",
  messagingSenderId: "56720734751",
  appId: "1:56720734751:web:6d3f20701f05676fd0332a",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
 */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyDehvhu3vjIuCsWo91dnZADuvv1f33i5t4",
  authDomain: "netflix-clone-99c79.firebaseapp.com",
  projectId: "netflix-clone-99c79",
  storageBucket: "netflix-clone-99c79.appspot.com",
  messagingSenderId: "56720734751",
  appId: "1:56720734751:web:6d3f20701f05676fd0332a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider };
