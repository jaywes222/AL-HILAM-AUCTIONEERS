import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { id: 1, link: "Home", route: "/" },
  { id: 2, link: "About Us", route: "/about-us" },
  { id: 3, link: "Our Services", route: "/our-services" },
  { id: 4, link: "Our Storage Facilities", route: "/storage-facilities" },
  { id: 5, link: "Our Clients", route: "/our-clients" },
  { id: 6, link: "Our Team", route: "/our-team" },
  { id: 7, link: "Contact / Branches", route: "/contact-us" },
];

function Header() {
  const [showNavlinks, setShowNavlinks] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setShowNavlinks(false);
  }, [pathname]);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Top bar */}
      <div className="hidden lg:block bg-secondary/80 backdrop-blur border-b border-white/30">
        <div className="max-w-[1440px] mx-auto px-10 h-9 flex items-center justify-end gap-6 text-xs text-blue-dark">
          <a href="tel:+254723261696" className="hover:text-primary transition-colors">
            +254 723 261 696
          </a>
          <a href="tel:+254113091409" className="hover:text-primary transition-colors">
            +254 113 091 409
          </a>
          <a
            href="mailto:info.alhilam@gmail.com"
            className="hover:text-primary transition-colors"
          >
            info.alhilam@gmail.com
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-secondary/90 backdrop-blur-lg shadow-header transition-all duration-500">
        <header className="py-5 md:py-6 px-5 md:px-10 flex items-center justify-between max-w-[1440px] mx-auto relative">

          {/* Logo */}
          <Link to="/" className="relative z-10">
            <h1 className="font-bold text-xl md:text-2xl tracking-tight text-blue-dark">
              Al-Hilam Auctioneers
            </h1>
          </Link>

          {/* Mobile button */}
          <div className="md:hidden z-10">
            <button
              onClick={() => setShowNavlinks(!showNavlinks)}
              className={`w-11 h-11 flex items-center justify-center rounded-xl transition-all ${
                showNavlinks
                  ? "bg-white/50 border border-primary/40"
                  : "bg-white/30 border border-white/40 hover:bg-white/50"
              }`}
            >
              {showNavlinks ? (
                <AiOutlineClose className="text-primary h-5 w-5" />
              ) : (
                <HiOutlineMenuAlt4 className="text-blue-dark h-5 w-5" />
              )}
            </button>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map(({ id, link, route }) => {
              const isActive = pathname === route || pathname.startsWith(`${route}/`);

              return (
                <Link
                  key={id}
                  to={route}
                  className="relative px-4 py-2.5 rounded-lg group transition-all"
                >
                  <div
                    className={`absolute inset-0 rounded-lg transition-all ${
                      isActive
                        ? "bg-white/50 border border-primary/40"
                        : "group-hover:bg-white/40"
                    }`}
                  />
                  <span
                    className={`relative z-10 text-sm font-medium ${
                      isActive ? "text-primary" : "text-blue-dark/80"
                    }`}
                  >
                    {link}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile nav */}
          <nav
            className={`md:hidden absolute top-full left-0 w-full bg-secondary/95 backdrop-blur-xl border-t border-white/30 transition-all ${
              showNavlinks
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <div className="p-6 space-y-2">
              {navLinks.map(({ link, route, id }) => {
                const isActive = pathname === route || pathname.startsWith(`${route}/`);

                return (
                  <Link
                    key={id}
                    to={route}
                    onClick={() => setShowNavlinks(false)}
                    className={`block px-5 py-3.5 rounded-xl transition-all ${
                      isActive
                        ? "bg-white/50 border border-primary/40 text-primary"
                        : "hover:bg-white/40 text-blue-dark"
                    }`}
                  >
                    {link}
                  </Link>
                );
              })}
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Header;
