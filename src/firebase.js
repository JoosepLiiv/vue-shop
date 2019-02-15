  import firebase from 'firebase';
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBwUCyJmL8Sir78rJPI68D-zQBcQ8TjkQk",
    authDomain: "vue-shop-c37b0.firebaseapp.com",
    databaseURL: "https://vue-shop-c37b0.firebaseio.com",
    projectId: "vue-shop-c37b0",
    storageBucket: "vue-shop-c37b0.appspot.com",
    messagingSenderId: "105714700629"
  };
  export const fb = firebase.initializeApp(config);