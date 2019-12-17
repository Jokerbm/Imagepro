var firebaseConfig = {
  apiKey: "AIzaSyCDmoqdXeDM7gsKq304pNlGb3bS0U86AwE",
  authDomain: "psit-project.firebaseapp.com",
  databaseURL: "https://psit-project.firebaseio.com",
  projectId: "psit-project",
  storageBucket: "psit-project.appspot.com",
  messagingSenderId: "42323632843",
  appId: "1:42323632843:web:2daf449242802c2d09314e",
  measurementId: "G-GNZVEQRZZ2"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
  const settings = {timestampsInSnapshots: true};

  var storageRef = firebase.storage().ref();