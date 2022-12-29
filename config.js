import firebase from 'firebase';

  var firebaseConfig = {
    //paste your SDK here
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCTgtCZfRIIs75D6WbtXxCspXAjtbuBieo",
  authDomain: "team-voting-app-9c756.firebaseapp.com",
  projectId: "team-voting-app-9c756",
  storageBucket: "team-voting-app-9c756.appspot.com",
  messagingSenderId: "669234914284",
  appId: "1:669234914284:web:2b59fa095cfa8a26e2d6c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


    
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();