import {useState} from "react"
 function Login(){
   const [name,setName]=useState("");
   const [password,setPassword]=useState("");

   const changeName= (event)=>{
    setName(event.target.value);
   }
   const changePassword= (event)=>{
    setPassword(event.target.value);
   }
   const checkUser= ()=>{
    if (name=="" || password==""){
      alert("All fields must be filled");
    }
    else{
      if(name!="" || password!=""){
        debugger
         window.open("/user/home")
        // fetch(`https://jsonplaceholder.typicode.com/users?username=${name}`)
        // .then((response) => response.json())
        // .then((data)=>data["id"])
        // .then((id)=>alert(id));
      }
    }
 
  }
  

  
   return (
    <div>
      <lable>User name</lable><br/>
      <input
      value={name}
      onChange={changeName}
      placeholder="name"
      />
      <lable>Password</lable><br/>
      <input
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