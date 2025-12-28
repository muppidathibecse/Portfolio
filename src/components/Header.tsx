import { NavLink } from "react-router-dom";

function Header() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors ${isActive ? "text-black font-semibold" : "text-[#858585]"}`;

  return (
    <header className="w-full flex justify-between items-center py-2 px-4 shadow-md">
      <div className="flex justify-center items-center gap-0.5">
        <div className="bg-[#FF6300] text-white font-bold text-[30px] text-center px-2 py-0.2 rounded-xl">
          M
        </div>
        <p className="font-inter font-bold text-[30px] leading-normal tracking-normal text-black">
          uppidathi
        </p>
      </div>

      <nav className="text-[21px] flex items-center gap-8 px-6 py-3">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
        <NavLink to="/projects" className={linkClass}>
          Projects
        </NavLink>
        
      </nav>

      <button className="bg-[#FF6300] text-white px-3 py-2 rounded-xl font-semibold">
        Download CV
      </button>
    </header>
  );
}

export default Header;
