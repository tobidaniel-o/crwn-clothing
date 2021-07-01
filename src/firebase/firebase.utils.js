import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA3qVCEkNn3-jxWTL1d-_Y1UXOrXuL-n30",
  authDomain: "crwn-db-b64e0.firebaseapp.com",
  projectId: "crwn-db-b64e0",
  storageBucket: "crwn-db-b64e0.appspot.com",
  messagingSenderId: "292794313733",
  appId: "1:292794313733:web:7d8ecf30f85dc4417ac06c",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase
