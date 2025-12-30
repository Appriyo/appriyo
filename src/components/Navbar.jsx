import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Initialize theme directly from localStorage or system preference
  const [currentTheme, setCurrentTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 
             (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'dark'; // Default value for SSR
  });

  // Apply theme to document on mount and when theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Navigation items
  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Navigation Bar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-base-100/90 backdrop-blur-2xl border-b border-base-300/50 shadow-xl' 
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo Section */}
            <div className="shrink-0">
              <a
                href="#hero"
                className="group relative flex items-center space-x-3"
                aria-label="Appriyo Home"
              >
                {/* Transparent Logo Container */}
                <div className="relative w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/logo/appriyo_nav_logo.png"
                    alt="Appriyo - IT Solutions & Services"
                    className="w-10 h-10 object-contain drop-shadow-lg"
                    loading="eager"
                    width="40"
                    height="40"
                  />
                </div>
                
                {/* Stylized Logo Text */}
                <div className="hidden sm:flex flex-col">
                  <span className="text-2xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent tracking-tight">
                    Appriyo
                  </span>
                  <div className="h-0.5 w-0 group-hover:w-full bg-linear-to-r from-primary to-secondary transition-all duration-500 mt-0.5"></div>
                </div>
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:block">
              <div className="ml-10 flex items-center space-x-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="relative group px-4 py-2.5 text-sm font-medium transition-all duration-300"
                    aria-label={`Navigate to ${item.name}`}
                  >
                    <span className="relative z-10 text-base-content/80 group-hover:text-base-content transition-colors duration-300">
                      {item.name}
                    </span>
                    <span className="absolute inset-0 bg-linear-to-r from-primary/10 to-secondary/10 rounded-xl scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></span>
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-primary to-secondary group-hover:w-3/4 transition-all duration-500"></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Tablet/Mid-size Navigation Links */}
            <div className="hidden lg:block xl:hidden">
              <div className="ml-6 flex items-center space-x-1">
                {navItems.slice(0, 4).map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="relative group px-3 py-2 text-sm font-medium transition-all duration-300"
                    aria-label={`Navigate to ${item.name}`}
                  >
                    <span className="relative z-10 text-base-content/80 group-hover:text-base-content transition-colors duration-300">
                      {item.name}
                    </span>
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-primary to-secondary group-hover:w-3/4 transition-all duration-500"></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Section - Theme Toggle & CTA */}
            <div className="flex items-center gap-3 lg:gap-4">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="btn btn-ghost btn-circle group"
                aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}
              >
                {currentTheme === 'light' ? (
                  // Moon icon for dark mode
                  <svg 
                    className="w-5 h-5 text-base-content group-hover:text-primary transition-colors duration-300" 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                ) : (
                  // Sun icon for light mode
                  <svg 
                    className="w-5 h-5 text-base-content group-hover:text-primary transition-colors duration-300" 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                )}
              </button>

              {/* Desktop CTA Button */}
              <button className="hidden lg:block btn btn-primary px-6 py-3 font-medium rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 active:scale-95">
                Get Started
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden btn btn-ghost btn-square group"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`block w-5 h-0.5 bg-base-content transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}></span>
                  <span className={`block w-5 h-0.5 bg-base-content transition-all duration-300 mt-1 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}></span>
                  <span className={`block w-5 h-0.5 bg-base-content transition-all duration-300 mt-1 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100 bg-base-100/95 backdrop-blur-2xl border-t border-base-300/50 shadow-2xl' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="container mx-auto px-4 py-6">
            {/* Mobile Logo & Close */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <img
                  src="/logo/appriyo_nav_logo.png"
                  alt="Appriyo"
                  className="w-8 h-8 object-contain"
                  width="32"
                  height="32"
                />
                <span className="text-xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Appriyo
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn btn-ghost btn-circle"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="space-y-2" role="navigation" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-base-300/50 group"
                  aria-label={`Navigate to ${item.name}`}
                >
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3"></div>
                    <span className="text-base-content/80 group-hover:text-base-content">
                      {item.name}
                    </span>
                  </div>
                </a>
              ))}
            </nav>

            {/* Mobile CTA Button */}
            <div className="mt-8 pt-6 border-t border-base-300/50">
              <button className="w-full btn btn-primary py-4 text-lg font-medium rounded-xl">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;