const socket=io();
const $clicked=document.getElementById("clicked");
const $room_name=document.getElementById("room_name");

const username=document.getElementById("username")
const password=document.getElementById("password")


document.getElementById("submitBut").addEventListener("click",(e)=>{
    e.preventDefault();
   
   console.log("here is " +username.value)
    socket.emit("credentials",{
        "username":username.value,
         "password":password.value
    })
})
socket.on("message",(data)=>{
    console.log("hello hi people"+data)
})

socket.on("server_to_client",(data)=>{
    console.log(data)
})
socket.on("msg",(data)=>{
    console.log(data+" room id")
})
$clicked.addEventListener("click", (e)=>{
    socket.emit("serverConnection",$room_name.value,(r)=>{
        console.log(r)
    })
});


//moment .js
