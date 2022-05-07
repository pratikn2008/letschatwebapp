// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMqVUSWgl3UFcY6BMzm5HQnD3uh1QiB5o",
    authDomain: "lets-chat-web-app-111b3.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-111b3-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-111b3",
    storageBucket: "lets-chat-web-app-111b3.appspot.com",
    messagingSenderId: "481888312295",
    appId: "1:481888312295:web:663e0231199b509475fb42"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+ user_name+"!";

    function addroom() {
        room_name = document.getElementById("room_name").value;
        if(room_name == ""){
            document.getElementById("error").innerHTML = "Please Enter Room Name";
            document.getElementById("error").style.backgroundColor = "white";
            document.getElementById("error").style.color = "red";
        }
        else{
            firebase.database().ref("/").child(room_name).update({
                purpose: "adding room name"
            });
            localStorage.setItem("roomname" , room_name);
            window.location = "kwitter_page.html";
        }
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    //Start code
    console.log("room_name - " + Room_names);
    row = "<div class='room_name' id="+ Room_names +" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToroomname(name){
    console.log(name);
    localStorage.setItem("Roomname" , name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}

