
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCYfCoa4PP6D-M9I04UAi9ASXCStd735QE",
      authDomain: "kwitter-678c2.firebaseapp.com",
      databaseURL: "https://kwitter-678c2-default-rtdb.firebaseio.com",
      projectId: "kwitter-678c2",
      storageBucket: "kwitter-678c2.appspot.com",
      messagingSenderId: "64589913479",
      appId: "1:64589913479:web:62e419de7d741c605ac722"
    };
    
    // Initialize Firebase
       firebase.initializeApp(firebaseConfig);

     //updating html element welcome
     var username=localStorage.getItem("username");
     document.getElementById("welcome").innerHTML="Welcome "+username+"!";

     //function add room
     function addroom(){
           var roomname=document.getElementById("room_name").value;
           firebase.database().ref("/").child(roomname).update({purpose:"adding room name"});
           localStorage.setItem("room_name",roomname);
           window.location="kwitter_page.html";
     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room-names"+Room_names);
var row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
 
function redirect(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
