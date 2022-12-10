// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHWv9zwQ50cRwHQniYEzNqJfEmVnBnsUk",
    authDomain: "kwitter-66552.firebaseapp.com",
    databaseURL: "https://kwitter-66552-default-rtdb.firebaseio.com",
    projectId: "kwitter-66552",
    storageBucket: "kwitter-66552.appspot.com",
    messagingSenderId: "195395606525",
    appId: "1:195395606525:web:3d4b2df985d64e9512ab94",
    measurementId: "G-1C5CJD0W36"
  }; 
  firebase.initialiseApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value= "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code


//End code
    } });  }); }
getData();
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("kwitter.html");
    
}