import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import Albums from "./Albums.js";
import Posts from "./Posts.js";
import Todos from "./Todos.js"
import Photos from "./Photos.js"
import Login from "./Login.js"
import UserNav from "./UserNav.js"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>} />
        <Route path="/" element={<UserNav/>}> 
          <Route path="user/home" element={<Home/>}/>
          <Route path="user/albums" element={<Albums />}/>
          <Route path="user/todos" element={<Todos/>}/>
          <Route path="user/posts" element={<Posts/>} />
          
          
        </Route>
        
        
        <Route path="user/Albums/photos" element={<Photos/>}/>

      </Routes>
    </BrowserRouter>
  );
}

