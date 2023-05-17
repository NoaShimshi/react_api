import { Outlet, Link } from "react-router-dom";

export function UserNav() {
  const handleLogout =()=> {
    localStorage.removeItem("user")
    localStorage.removeItem("todosList")
  };
  var userJson=localStorage.getItem("user");
  var user=JSON.parse(userJson)
  var name=user.name;

  return (
    <>
      <nav>
        <ul>
        <li>
           <h3>hi {name}</h3>
          </li>
          <li>
            <Link to="/user/todos">Todos</Link>
          </li>
          <li>
            <Link to="/user/posts">Posts</Link>
          </li>
          <li>
            <Link to="/user/albums">Albums</Link>
          </li>
          <li>
            <Link to="/user/info">Info</Link>
          </li>
          <li>
            <Link to="/login" onClick={handleLogout}>Logout</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default UserNav;