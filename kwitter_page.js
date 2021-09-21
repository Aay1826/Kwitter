//YOUR FIREBASE LINKS
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

       var user_name=localStorage.getItem("username");
       var room_name=localStorage.getItem("room_name");

       function send(){
             var msg=document.getElementById("msg").value;
             firebase.database().ref(room_name).push({
                   name:user_name,
                   message:msg,
                   like:0
             });
             document.getElementById("msg").value="";
       }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

var name=message_data['name'];
var message=message_data['message'];
var like=message_data['like'];

var name_tag="<h4>"+ name + "<img class='user_tick' src='tick.png'></h4>";
var msg_tag="<h4 class='message_h4'>" + message +"</h4>";
var like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
var span_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+  like + "</span></button><hr>";

var row=name_tag+msg_tag+like_button+span_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

//like button updation
function updateLike(message_id){
console.log("like-"+message_id);
button_id=message_id;
like=document.getElementById(button_id).value;
var update_like=Number(like)+1;
console.log(update_like);

firebase.database().ref(room_name).child(message_id).update({like:update_like});
}

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location="index.html";
}