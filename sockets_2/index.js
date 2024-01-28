const express=require("express");
var http=require("http"); //here server should be must be var not const **
var app=express();
app.use(express.static("public")) 
const socketio=require("socket.io")
const server=http.createServer(app);//even if we dont do this express does this behind the scenes
const io=socketio(server);//parameter is raw http server
require("./mongoose/mongoose")

const User=require("./models/user");
// const user1=new User({
//     name:"test",
//     password:"hello"
// })
// user1.save()

//socket communication we send events
const dummy={id:""};
io.on("connection", (socket) => { //this function will run each time for each induvidual connection

    socket.emit("server_to_client", socket.id)
    socket.on("credentials",(data)=>{
        console.log(data)
        socket.join("64f43873f186c82132a97365")
        socket.broadcast.to("64f43873f186c82132a97365").emit("message",data.username)
    })

    socket.on("serverConnection",(data,callback) => {
        if(dummy.id==""){dummy.id=socket.id};
        socket.broadcast.to(dummy.id).emit("msg","hiii im this "+socket.id+data)
        callback("success")
    })
    socket.on("disconnect",()=>{
        if(socket.id==dummy.id){
            dummy.id="";
        }
        console.log("disconnected")
    })

})



server.listen(3000, () => {
    console.log("hello")
})


/*
socket.emit emits an event to that same person

io.emit emits every one who is in that connection

socket.broadcast.emit emits event to all the people execto to him self


Disconnet: we use only ** socket.on("disconnect") ** not io.on
*/

 
