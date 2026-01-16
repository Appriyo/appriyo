import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const [currentTheme, setCurrentTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light")
      );
    }
    return "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Solutions", path: "/solutions" },
    { name: "Work", path: "/work" },
    { name: "About Us", path: "/about"},
    { name: "Contact", path: "/contact" },
  ];

  const isActiveRoute = (path) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-base-100/90 backdrop-blur-2xl border-b border-base-300/50 shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <NavLink to="/" className="flex items-center space-x-3 group">
              <img
                src="/logo/appriyo_logo.svg"
                className="w-10 h-10 object-contain"
                alt="Appriyo"
              />
              <span className="hidden sm:block text-2xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                Appriyo
              </span>
            </NavLink>

            {/* Desktop Links */}
            <div className="hidden xl:flex space-x-1">
              {navItems.map((item) => {
                const active = isActiveRoute(item.path);
                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className="relative group px-4 py-2.5 text-sm font-medium transition-all duration-300"
                  >
                    <span
                      className={`relative z-10 transition-colors duration-300 ${
                        active
                          ? "text-base-content"
                          : "text-base-content/80 group-hover:text-base-content"
                      }`}
                    >
                      {item.name}
                    </span>

                    <span
                      className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                        active
                          ? "bg-linear-to-r from-primary/10 to-secondary/10"
                          : "opacity-0 group-hover:opacity-100 bg-linear-to-r from-primary/10 to-secondary/10"
                      }`}
                    />

                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-linear-to-r from-primary to-secondary transition-all duration-500 ${
                        active ? "w-3/4" : "w-0 group-hover:w-3/4"
                      }`}
                    />
                  </NavLink>
                );
              })}
            </div>

            {/* Theme + Mobile */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="btn btn-ghost btn-circle"
              >
                {currentTheme === "light" ? "🌙" : "☀️"}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden btn btn-ghost btn-square"
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          } bg-base-100`}
        >
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item) => {
              const active = isActiveRoute(item.path);
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-all ${
                    active
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-base-300/50"
                  }`}
                >
                  {item.name}
                </NavLink>
              );
            })}
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;