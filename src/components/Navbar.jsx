import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
// Optional: Install lucide-react for the icon (npm install lucide-react)
import { Phone } from "lucide-react"; 

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Solutions", path: "/solutions" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // WhatsApp Config
  const phoneNumber = "+8801902182656"; // Replace with your actual number (include country code, no +)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello Appriyo, I'm interested in your services!`;

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
    <>
      {/* Animation Style - You can move this to your global CSS file */}
      <style>
        {`
          @keyframes subtle-ring {
            0% { transform: scale(1); }
            50% { transform: scale(1.1) rotate(5deg); }
            100% { transform: scale(1); }
          }
          .animate-whatsapp-ring {
            animation: subtle-ring 2s infinite ease-in-out;
          }
        `}
      </style>

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
                src="/logo/appriyo_nav_logo.png"
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

          {/* Right Action Button (Desktop & Mobile) */}
          <div className="navbar-end flex items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full font-semibold text-sm transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <span className="animate-whatsapp-ring">
                <Phone size={18} fill="currentColor" />
              </span>
              <span className="hidden sm:inline">Call Appriyo</span>
            </a>

            {/* Mobile Menu Dropdown */}
            <div className="dropdown dropdown-end lg:hidden">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
    </>
  );
};

export default Navbar;