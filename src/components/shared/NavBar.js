import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/Auth-provider";

export function NavBar() {
  const { user } = useContext(AuthContext);
  const { signOut } = useContext(AuthContext);
  return (
    <nav>
      <div>Personally</div>
      <ul>
        <li>
          <Link to="/Posts">Posts</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Admin">Admin</Link>
        </li>
        <li>
          {!user && <Link to="/SignIn">Sign In</Link>}
          {user && <button onClick={signOut}>Sign Out</button>}
        </li>
      </ul>
    </nav>
  );
}
