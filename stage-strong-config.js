import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js';
import { getAuth, setPersistence, browserLocalPersistence, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut, updateProfile, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js';
import { getFirestore, doc, getDoc, setDoc, onSnapshot, serverTimestamp, runTransaction } from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js';
const config={apiKey:'AIzaSyAwqT9XlIImcpNGuVeiPpErEqb11uKztKg',authDomain:'fuerza-en-casa.firebaseapp.com',projectId:'fuerza-en-casa',storageBucket:'fuerza-en-casa.firebasestorage.app',messagingSenderId:'839653668597',appId:'1:839653668597:web:e378b564560fc7e984f7bc'};
const app=initializeApp(config), auth=getAuth(app), db=getFirestore(app); await setPersistence(auth,browserLocalPersistence);
const google=new GoogleAuthProvider();
export {auth,db,doc,getDoc,setDoc,onSnapshot,serverTimestamp,runTransaction,GoogleAuthProvider,google,signInWithPopup,signInWithRedirect,getRedirectResult,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendPasswordResetEmail,signOut,updateProfile,onAuthStateChanged};
