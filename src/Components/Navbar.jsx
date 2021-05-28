import { Link } from "react-router-dom";

export const Navbar = ({isLoggedIn, handleLogin}) => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/category">Category</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
      <li>
          <button onClick={handleLogin}> {isLoggedIn? 'logout': 'login'} </button>
      </li>
    </ul>
  </nav>
);
