import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="w-full bg-gray-900 text-white shadow-md">
      <nav className="max-w-6xl mx-auto flex gap-8 px-6 py-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}

export default Header;
