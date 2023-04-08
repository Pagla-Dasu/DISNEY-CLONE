import firebase from 'firebase/compat/app';
// import { GoogleAuthProvider } from "firebase/auth";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: "AIzaSyBcO5_749b3vatmWy4wcjSfWuuPPNBheXo",
	authDomain: "disneyplus-b3e64.firebaseapp.com",
	projectId: "disneyplus-b3e64",
	storageBucket: "disneyplus-b3e64.appspot.com",
	messagingSenderId: "41051849963",
	appId: "1:41051849963:web:eb19736b53bee43b15aaae",
	measurementId: "G-0WQBW04SN8"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage;

export { auth, provider, storage };
export default db;
