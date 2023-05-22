import {useState} from "react"
import { useNavigate } from "react-router-dom";
import './login.css';

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
   const checkUser= (event)=>{ 
        event.preventDefault();
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
    <form  onSubmit={checkUser}>
      <label>User name:</label>
      <input
      required
      value={userName}
      onChange={changeUserName}
      placeholder="name"
      /><br/>
      <label>Password:</label>
      <input
      required
      value={password}
      onChange={changePassword}
      placeholder="password"
      type="password"
      /><br/>
        <input type="submit" value="Submit"/>
    </form>
   )
}
export default Login;