import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          Navbar
        </Link>
        <ul>
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/about" className="nav-item">
            About
          </Link>
          <Link to="/services" className="nav-item">
            Services
          </Link>
          <Link to="/contact" className="nav-item">
            Contact
          </Link>
        </ul>
        <Link to="/login" className="btn">
          Login
        </Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
