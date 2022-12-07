import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDY78PfuCaRHsz5ya7b6LIMZJH9_VwKRFg",
    authDomain: "devfest-test-da0e2.firebaseapp.com",
    projectId: "devfest-test-da0e2",
    storageBucket: "devfest-test-da0e2.appspot.com",
    messagingSenderId: "968064342715",
    appId: "1:968064342715:web:5d5018343deddffd52a79e",
    measurementId: "G-8LJ69P685Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics };