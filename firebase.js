
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
/*addSong = () => {
    db.collection("Fav").add({
        id: "3twWGNAbmlzitnkgtivCKu",
        name: "la lune attire la mer",
        singer: "Apha Wann"
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}*/
let navRap = document.querySelector(".navRap");
db.collection("Fav")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

            let ajoutLigneBDD = document.createElement('div');
            ajoutLigneBDD.textContent = doc.data().name + " - " + doc.data().singer;
            //ajoutLigne.setAttribute('href',getArtistAlbums(element.id));
            ajoutLigneBDD.classList.add('line_bdd');
            navRap.append(ajoutLigneBDD);
        });
    })
    .catch((error) => {
        console.error("Error getting documents: ", error);
    });



