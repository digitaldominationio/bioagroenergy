"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, Sparkles, Globe, Briefcase, Leaf, Users, Newspaper, GraduationCap, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/* ================= DROPDOWN COMPONENT ================= */
function Dropdown({
  title,
  children,
  icon,
}: {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <li className="relative group list-none w-full lg:w-auto">
      
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
        className="flex items-center justify-between lg:justify-start gap-2 cursor-pointer py-3 lg:py-0 w-full font-medium transition-all duration-300 group/btn"
      >
        <span className="flex items-center gap-2 whitespace-nowrap">
          {icon && <span className="w-4 h-4 text-cyan-400 group-hover/btn:scale-110 transition-transform duration-300">{icon}</span>}
          <span className="relative bg-gradient-to-r from-yellow-300  to-cyan-400 bg-clip-text text-transparent font-semibold">
            {title}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-cyan-400 transition-all duration-300 group-hover/btn:w-full"></span>
          </span>
        </span>
        <ChevronDown
          size={14}
          className={`text-cyan-400 transition-all duration-300 ${
            open ? "rotate-180" : "lg:group-hover:rotate-180"
          }`}
        />
      </button>

      {/* Desktop Dropdown */}
      <ul className="hidden lg:block absolute left-0 top-full pt-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-out scale-95 group-hover:scale-100 z-50">
        <div className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] rounded-2xl shadow-2xl border border-white/10 backdrop-blur-xl overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-yellow-400/10 before:to-cyan-400/10 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100">
          <div className="relative py-3">
            {children}
          </div>
        </div>
      </ul>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col pl-6 border-l-2 border-gradient-to-b from-yellow-400/50 to-cyan-400/50 my-2 gap-1 ml-2">
          {children}
        </ul>
      </div>
    </li>
  );
}

/* ================= DROPDOWN ITEM ================= */
function DropdownItem({
  href,
  children,
  closeMenu,
}: {
  href: string;
  children: ReactNode;
  closeMenu: () => void;
}) {
  return (
    <li className="list-none">
      <Link
        href={href}
        onClick={closeMenu}
        className="flex items-center gap-3 px-5 py-3 hover:bg-gradient-to-r hover:from-yellow-400/10 hover:to-cyan-400/10 transition-all duration-300 rounded-xl text-sm font-medium group/item mx-2"
      >
        <span className="w-1 h-1 rounded-full bg-gradient-to-r from-yellow-300 to-cyan-400 opacity-0 group-hover/item:opacity-100 group-hover/item:scale-150 transition-all duration-300"></span>
        <span className="relative bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent group-hover/item:from-yellow-300 group-hover/item:to-cyan-400 transition-all duration-300">
          {children}
          <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-yellow-300 to-cyan-400 transition-all duration-300 group-hover/item:w-full"></span>
        </span>
      </Link>
    </li>
  );
}

/* ================= MAIN NAVBAR ================= */
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLogo, setHoveredLogo] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  /* Handle scroll effect */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close menu on route change */
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  /* Prevent scroll + cleanup */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className={`fixed w-full top-0 left-0 z-[100] transition-all duration-300 ${
      scrolled ? "bg-black shadow-lg" : "bg-black"
    } border-b border-white/10`}>
      
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8 py-3 lg:py-4 relative">
        
        {/* Logo */}
        <Link 
          href="/" 
          className="relative z-[110] shrink-0 group" 
          onClick={closeMenu}
          onMouseEnter={() => setHoveredLogo(true)}
          onMouseLeave={() => setHoveredLogo(false)}
        >
          <Image
            src="/img/logo-new.jpg"
            alt="logo"
            width={100}
            height={50}
            className="w-auto h-10 lg:h-14 transition-all duration-300 group-hover:scale-105 relative"
            priority
          />
        </Link>

        {/* Desktop Navigation Links - Hidden on mobile */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          <Link
            href="/"
            onClick={closeMenu}
            className={`px-4 py-2 font-semibold transition-all duration-300 relative group ${
              pathname === "/" 
                ? "bg-gradient-to-r from-yellow-300 to-cyan-400 bg-clip-text text-transparent" 
                : "bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent hover:from-yellow-300 hover:to-cyan-400"
            }`}
          >
            Home
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-cyan-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>

          <Dropdown title="Our Group" icon={<Briefcase size={14} />}>
            <DropdownItem href="/about" closeMenu={closeMenu}>About Us</DropdownItem>
            <DropdownItem href="/team" closeMenu={closeMenu}>Our Leadership</DropdownItem>
          </Dropdown>

          <Dropdown title="Business Division" icon={<Globe size={14} />}>
            <DropdownItem href="/ethanol" closeMenu={closeMenu}>Ethanol</DropdownItem>
            <DropdownItem href="/ddgs" closeMenu={closeMenu}>DDGS</DropdownItem>
            <DropdownItem href="/co2" closeMenu={closeMenu}>CO₂</DropdownItem>
            <DropdownItem href="/bricks" closeMenu={closeMenu}>Bricks</DropdownItem>
          </Dropdown>

          <Dropdown title="Sustainability" icon={<Leaf size={14} />}>
            <DropdownItem href="/moef" closeMenu={closeMenu}>MOEF & CC Compliances</DropdownItem>
            <DropdownItem href="/annual" closeMenu={closeMenu}>Annual Statement</DropdownItem>
          </Dropdown>

          <Dropdown title="CSR" icon={<Users size={14} />}>
            <DropdownItem href="/health" closeMenu={closeMenu}>Health</DropdownItem>
            <DropdownItem href="/education" closeMenu={closeMenu}>Education</DropdownItem>
            <DropdownItem href="/sports" closeMenu={closeMenu}>Sports</DropdownItem>
            <DropdownItem href="/community" closeMenu={closeMenu}>Community</DropdownItem>
          </Dropdown>

          <Dropdown title="Newsroom" icon={<Newspaper size={14} />}>
            <DropdownItem href="/bapl" closeMenu={closeMenu}>Bulletin</DropdownItem>
            <DropdownItem href="/events" closeMenu={closeMenu}>Events</DropdownItem>
          </Dropdown>

          <Link
            href="/career"
            onClick={closeMenu}
            className={`px-4 py-2 font-semibold transition-all duration-300 relative group flex items-center gap-2 ${
              pathname === "/career" 
                ? "bg-gradient-to-r from-yellow-300 to-cyan-400 bg-clip-text text-transparent" 
                : "bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent hover:from-yellow-300 hover:to-cyan-400"
            }`}
          >
            <GraduationCap size={14} className="text-cyan-400" />
            Career
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-cyan-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>

          <Link
            href="/contact"
            onClick={closeMenu}
            className="ml-2 px-5 py-2 bg-gradient-to-r from-yellow-300 to-cyan-400 rounded-full  font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 relative group overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Phone size={14} />
              Contact
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>

        {/* Hamburger Menu Button - MOBILE VISIBLE */}
        <button
          className="lg:hidden relative z-[110] text-white p-3 hover:bg-white/10 rounded-xl transition-all duration-300 hover:scale-105 bg-black border border-white/20"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <div className="relative">
            {isOpen ? <X size={24} className="text-cyan-400" /> : <Menu size={24} className="text-yellow-400" />}
          </div>
        </button>

        {/* Mobile Menu Sidebar */}
        <div
          className={`
            fixed lg:hidden top-0 right-0 w-[85%] max-w-[320px] h-screen
            bg-black
            shadow-2xl border-l border-white/10
            flex flex-col
            px-6 pt-24 pb-8
            transition-all duration-500 ease-in-out z-[100]
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* Close button inside mobile menu */}
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 p-2 text-yellow-400 hover:text-cyan-400 hover:bg-white/10 rounded-lg transition-all duration-300"
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
          
          <ul className="flex flex-col w-full gap-1 relative overflow-y-auto pb-20">
            
            <li className="w-full">
              <Link
                href="/"
                onClick={closeMenu}
                className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-300 ${
                  pathname === "/" 
                    ? "bg-gradient-to-r from-yellow-400/20 to-cyan-400/20" 
                    : "hover:bg-white/5"
                }`}
              >
                <Sparkles size={18} className="text-cyan-400" />
                <span className={`font-semibold ${
                  pathname === "/" 
                    ? "bg-gradient-to-r from-yellow-300 to-cyan-400 bg-clip-text text-transparent" 
                    : "text-gray-300"
                }`}>Home</span>
              </Link>
            </li>

            <Dropdown title="Our Group" icon={<Briefcase size={16} />}>
              <DropdownItem href="/about" closeMenu={closeMenu}>About Us</DropdownItem>
              <DropdownItem href="/team" closeMenu={closeMenu}>Our Leadership</DropdownItem>
            </Dropdown>

            <Dropdown title="Business Division" icon={<Globe size={16} />}>
              <DropdownItem href="/ethanol" closeMenu={closeMenu}>Ethanol</DropdownItem>
              <DropdownItem href="/ddgs" closeMenu={closeMenu}>DDGS</DropdownItem>
              <DropdownItem href="/co2" closeMenu={closeMenu}>CO₂</DropdownItem>
              <DropdownItem href="/bricks" closeMenu={closeMenu}>Bricks</DropdownItem>
            </Dropdown>

            <Dropdown title="Sustainability" icon={<Leaf size={16} />}>
              <DropdownItem href="/moef" closeMenu={closeMenu}>MOEF & CC Compliances</DropdownItem>
              <DropdownItem href="/annual" closeMenu={closeMenu}>Annual Statement</DropdownItem>
            </Dropdown>

            <Dropdown title="CSR" icon={<Users size={16} />}>
              <DropdownItem href="/health" closeMenu={closeMenu}>Health</DropdownItem>
              <DropdownItem href="/education" closeMenu={closeMenu}>Education</DropdownItem>
              <DropdownItem href="/sports" closeMenu={closeMenu}>Sports</DropdownItem>
              <DropdownItem href="/community" closeMenu={closeMenu}>Community</DropdownItem>
            </Dropdown>

            <Dropdown title="Newsroom" icon={<Newspaper size={16} />}>
              <DropdownItem href="/bapl" closeMenu={closeMenu}>Bulletin</DropdownItem>
              <DropdownItem href="/events" closeMenu={closeMenu}>Events</DropdownItem>
            </Dropdown>

            <li className="w-full">
              <Link
                href="/career"
                onClick={closeMenu}
                className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-300 ${
                  pathname === "/career" 
                    ? "bg-gradient-to-r from-yellow-400/20 to-cyan-400/20" 
                    : "hover:bg-white/5"
                }`}
              >
                <GraduationCap size={18} className="text-yellow-400" />
                <span className={`font-semibold ${
                  pathname === "/career" 
                    ? "bg-gradient-to-r from-yellow-300 to-cyan-400 bg-clip-text text-transparent" 
                    : "text-gray-300"
                }`}>Career</span>
              </Link>
            </li>

            <li className="w-full mt-4">
              <Link
                href="/contact"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-yellow-500 to-cyan-500 rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-300"
              >
                <Phone size={18} />
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm lg:hidden z-[95] animate-fadeIn"
            onClick={closeMenu}
          />
        )}
      </nav>
    </header>
  );
}