import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Solutions", path: "/solutions" },
  { name: "Work", path: "/work" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (path) =>
    `rounded-lg px-4 py-2 text-sm font-medium transition-colors
     ${location.pathname === path
      ? "bg-primary/10 text-primary"
      : "text-base-content/80 hover:text-base-content hover:bg-base-200"
    }`;

  return (
    <div
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled
          ? "bg-base-100/90 backdrop-blur-xl border-b border-base-300 shadow-sm"
          : "bg-transparent"
        }`}
    >
      <div className="navbar max-w-7xl mx-auto px-4 lg:px-8">

        {/* Logo */}
        <div className="navbar-start">
          <NavLink to="/" className="flex items-center gap-2">
            <img
              src="/logo/Appriyo_Nav_logo.png"
              alt="Appriyo"
              className="w-12 h-12 object-contain"
            />
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex">
          <ul className="menu menu-horizontal gap-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink to={item.path} className={linkClass(item.path)}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 w-56 rounded-xl bg-base-100 shadow-xl border border-base-300 p-2"
            >
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink to={item.path} className={linkClass(item.path)}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;