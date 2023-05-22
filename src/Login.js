import {useState} from "react"
import { useNavigate } from "react-router-dom";

 function Login(){
   const [userName,setUserName]=useState("");
   const [password,setPassword]=useState("");
   const navigate=useNavigate(); 

   const changeUserName= (event)=>{
    setUserName(event.target.value);
   }
   const changePassword= (event)=>{
    setPassword(event.target.value);
   }
   const checkUser= ()=>{ 
        fetch(`https://jsonplaceholder.typicode.com/users?username=${userName}`)
        .then((response) => response.json())
        .then((data)=>data[0])
        .then((user)=>{
          var pass=user.address.geo.lat.slice(-4);
          if(pass==password){
            localStorage.setItem("user", JSON.stringify(user));
            navigate(`/users/${user.id}/home`)
          }
          else{
            alert("the password is incorrect")
            setPassword("");
          }
        }).catch((error)=>{
          setPassword("");
          setUserName("");
          alert(error)})  
  }
  

  
   return (
    <div>
      <label>User name</label><br/>
      <input
      required
      value={userName}
      onChange={changeUserName}
      placeholder="name"
      />
      <label>Password</label><br/>
      <input
      required
      value={password}
      onChange={changePassword}
      placeholder="password"
      type="password"
      /><br/>
        <button onClick={checkUser}>Login</button>
    </div>
   )
}
export default Login;