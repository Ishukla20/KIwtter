const firebaseConfig = {
      apiKey: "AIzaSyCEfgqZ05qjqmDlpLDVk_lEHhNQ8abYpt4",
      authDomain: "kwitter-edbf1.firebaseapp.com",
      databaseURL: "https://kwitter-edbf1-default-rtdb.firebaseio.com",
      projectId: "kwitter-edbf1",
      storageBucket: "kwitter-edbf1.appspot.com",
      messagingSenderId: "317884524414",
      appId: "1:317884524414:web:cf4cef574791481592f52f"
    };
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
