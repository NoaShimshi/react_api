import { Outlet, Link } from "react-router-dom";

export function UserNav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/user/todos">Todos</Link>
          </li>
          <li>
            <Link to="/user/posts">Posts</Link>
          </li>
          <li>
            <Link to="/user/albums">Albums</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default UserNav;