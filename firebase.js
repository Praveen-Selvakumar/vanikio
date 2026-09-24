import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signInWithRedirect,
    getRedirectResult,
    sendPasswordResetEmail,
    setPersistence,
    browserLocalPersistence,
    browserSessionPersistence,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    updateProfile,
    signOut
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

import {
    getStorage
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-storage.js";


const firebaseConfig = {

    apiKey:
        "AIzaSyDQp3SzKyJRSW4iAKgtVRATLkdm55y4JHQ",

    authDomain:
        "tabletap-3c1b9.firebaseapp.com",

    projectId:
        "tabletap-3c1b9",

    storageBucket:
        "tabletap-3c1b9.firebasestorage.app",

    messagingSenderId:
        "17540244686",

    appId:
        "1:17540244686:web:993d4136b661d5bbe3dc9f",

    measurementId:
        "G-L88D3WK9LW"
};


const app =
    initializeApp(
        firebaseConfig
    );


const auth =
    getAuth(app);


const googleProvider =
    new GoogleAuthProvider();


googleProvider.setCustomParameters({
    prompt: "select_account"
});


const db =
    getFirestore(app);


const storage =
    getStorage(app);


async function setAuthPersistence(
    rememberMe
) {

    await setPersistence(
        auth,
        rememberMe
            ? browserLocalPersistence
            : browserSessionPersistence
    );

}


export {

    app,
    auth,
    db,
    storage,

    googleProvider,

    signInWithEmailAndPassword,

    signInWithPopup,

    signInWithRedirect,

    getRedirectResult,

    sendPasswordResetEmail,

    setAuthPersistence,

    browserLocalPersistence,

    browserSessionPersistence,

    onAuthStateChanged,

    createUserWithEmailAndPassword,

    updateProfile,

    signOut
};