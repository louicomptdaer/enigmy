
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDxVCdajW4bq8rC-DpV---G5bpWdLrr3DU",
    authDomain: "enigmy-2021.firebaseapp.com",
    databaseURL: "https://enigmy-2021-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "enigmy-2021",
    storageBucket: "enigmy-2021.appspot.com",
    messagingSenderId: "110525337283",
    appId: "1:110525337283:web:c0bf29bf283a4a3e545c76",
    measurementId: "G-NY5XTZR6Z2"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.collection("Fav").add({
    id: "test",
    name: "Fryday",
    singer: "Booba"
})
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

