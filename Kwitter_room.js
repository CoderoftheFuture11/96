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
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";




function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
}
getData();
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("RoomName - " + Room_names);
      row="<div class='room_name' id="+Room_names+" onlick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
       

      });});}
    
      function redirectToRoomName(name){
        console.log(name);
        localStorage.setItem("room_name",name);
        window.location="kwitter_page.html";
    
    
         }
    
