import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl'
        : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a
                href="#hero"
                className="group relative flex items-center space-x-3"
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg overflow-hidden">
                  <img
                    src="/logo/AP Icon Transparent.png"
                    alt="Appriyo Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-xl tracking-tight">Appriyo</span>
                  <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500"></div>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="relative group text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></span>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Button & Theme Toggle - Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Theme Toggle */}
              <label className="btn btn-ghost btn-circle swap swap-rotate group">
                <input
                  type="checkbox"
                  className="theme-controller"
                  value="light"
                  onChange={(e) => {
                    const newTheme = e.target.checked ? 'light' : 'dark';
                    document.documentElement.setAttribute('data-theme', newTheme);
                    localStorage.setItem('theme', newTheme);
                  }}
                />

                {/* Sun icon (light mode) */}
                <svg
                  className="swap-on fill-current w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* Moon icon (dark mode) */}
                <svg
                  className="swap-off fill-current w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>

              {/* Get Started Button */}
              <button className="relative group px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 overflow-hidden">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger icon */}
                <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                    }`}></span>
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}></span>
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                    }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${isMobileMenuOpen
          ? 'max-h-96 opacity-100 bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50'
          : 'max-h-0 opacity-0'
          }`}>
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 group"
              >
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3"></div>
                  {item.name}
                </div>
              </a>
            ))}
            <div className="pt-4">
              <button className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-medium text-base transition-all duration-300 shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Background blur when mobile menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;