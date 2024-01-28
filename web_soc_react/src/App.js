import { data } from "./Data";
import styles from "./index.css"
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [user, setUser] = useState("")
  const [socket, setSocket] = useState(null);
  const [content,setContent]=useState([]);
  useEffect(() => {
    setSocket(io("http://localhost:5000"));;
    //  socket.on("firstevent",(e)=>{
    //     console.log(e)
    //   })
  }, [])



  useEffect(() => {
    socket?.emit("newuser", user)
  }, [socket, user])

  useEffect(()=>{
    socket?.on("getNofi",(Data)=>{
      setContent((prev)=>[...prev,Data]);
    })
  },[socket])
console.log(content);
  function handleClick(id) {
    console.log("hello " + id)
    const fin = data.filter(e => {
      return e.id == id;
    })
    setUser(fin[0].username)
  }

  function handleClick2(id){
  console.log(id);
  socket.emit("notified",{
    sender:data.filter(e=>{return e.id==id})[0].username,
    reciever:data.filter(e=>{return e.id==((id==2)?1:2)})[0].username,
    
  })

  }
  console.log(data)
  return (
    <div>
      <h1>hii</h1>
      {
        data.map(e => {
          return (
            <div key={e.id} className="border-2 p-4 w-1/2">
              <h1>username: {e.username}</h1>
              <h3>fullname: {e.fullname}</h3>
              <button className="p-2 bg-slate-400 rounded-xl mt-2" onClick={() => {
                handleClick(e.id)
              }} >send</button>
              <button className="p-2 bg-slate-400 rounded-xl mt-2"  onClick={()=>{
                handleClick2(e.id)
              }
              }>arrange</button>
            </div>
          )
        })
      }

      <Link to="/test">test</Link>
    </div>

  );
}
export default App;

