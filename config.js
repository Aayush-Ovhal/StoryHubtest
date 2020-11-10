import * as firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyDEpbcDl9Yc5tDNAYTr6i6x32QRqmuT-Jw",
    authDomain: "story-hub-68046.firebaseapp.com",
    databaseURL: "https://story-hub-68046.firebaseio.com",
    projectId: "story-hub-68046",
    storageBucket: "story-hub-68046.appspot.com",
    messagingSenderId: "490732138977",
    appId: "1:490732138977:web:083c8ce4e9eb52773c62a0"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();