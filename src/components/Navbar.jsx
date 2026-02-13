import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
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

  const phoneNumber = "8801902182656";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello Appriyo, I'm interested in your services!`;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (path) =>
    `rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200
     ${
       location.pathname === path
         ? "bg-primary/10 text-primary"
         : "text-base-content/80 hover:text-base-content hover:bg-base-200"
     }`;

  return (
    <>
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-base-100/90 backdrop-blur-xl border-b border-base-300 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[72px]">

          {/* LEFT */}
          <div className="navbar-start">
            <NavLink to="/" className="flex items-center gap-2">
              <img
                src="/logo/appriyo_nav_logo.png"
                alt="Appriyo"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
            </NavLink>
          </div>

          {/* CENTER (Desktop Only) */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink to={item.path} className={linkClass(item.path)}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="navbar-end flex items-center gap-2">

            {/* WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-primary text-primary-content hover:opacity-90 px-4 py-2 rounded-full font-semibold text-sm transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <span className="animate-whatsapp-ring">
                <Phone size={18} />
              </span>
              <span className="hidden sm:inline">
                Call Appriyo
              </span>
            </a>

            {/* Mobile Dropdown */}
            <div className="dropdown dropdown-end lg:hidden">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-base-content"
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
                className="menu dropdown-content mt-3 z-1 p-2 shadow-xl bg-base-100 rounded-xl w-60 border border-base-300"
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
