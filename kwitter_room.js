// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAnDLbxkd9TGf_MfjyrW07OD4-TVA5vzUk",
    authDomain: "project93kwitter.firebaseapp.com",
    projectId: "project93kwitter",
    storageBucket: "project93kwitter.appspot.com",
    messagingSenderId: "845379590468",
    appId: "1:845379590468:web:57ffe206d806df3b299f11"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
