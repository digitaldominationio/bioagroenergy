"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import type { ReactNode } from "react";

/* ================= DROPDOWN COMPONENT ================= */
function Dropdown({
  title,
  children,
  closeMenu,
}: {
  title: string;
  children: ReactNode;
  closeMenu: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <li className="relative group list-none w-full lg:w-auto">
      {/* Title */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between lg:justify-start gap-1 cursor-pointer bg-gradient-to-r from-yellow-200 to-cyan-400 bg-clip-text text-transparent py-3 lg:py-0 w-full font-medium"
      >
        <span className="whitespace-nowrap">{title}</span>
        <ChevronDown
          size={16}
          className={`text-cyan-400 transition-transform duration-300 ${
            open ? "rotate-180" : "group-hover:rotate-180"
          }`}
        />
      </div>

      {/* Desktop Dropdown (lg and up) */}
      <ul className="hidden lg:block absolute left-0 top-full pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <div className="bg-[#1e3a5f] rounded-lg shadow-2xl border border-white/10 py-2">
          {children}
        </div>
      </ul>

      {/* Mobile Dropdown (Below lg) */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col pl-4 border-l border-yellow-200/20 my-2 gap-1">
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
        className="flex items-center px-4 py-2 text-white/80 hover:text-white hover:bg-[#2a4d73] transition rounded-md text-sm lg:text-[13px] font-medium"
      >
        {children}
      </Link>
    </li>
  );
}

/* ================= MAIN NAVBAR ================= */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  return (
    <header className="fixed w-full top-0 left-0 z-[100] bg-black border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8 py-4">
        
        {/* Logo */}
        <Link href="/" className="relative z-[110] shrink-0" onClick={closeMenu}>
          <Image src="/img/logo.png" alt="logo" width={100} height={50} className="w-auto h-12 lg:h-16" priority />
        </Link>

        {/* Hamburger Button */}
        <button
          className="lg:hidden relative z-[110] text-white p-2 hover:bg-white/10 rounded-md transition"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Menu */}
        <div
          className={`
            fixed lg:static top-0 right-0 w-[280px] lg:w-auto h-screen lg:h-auto
            bg-[#0a0a0a] lg:bg-transparent shadow-2xl lg:shadow-none
            flex flex-col lg:flex-row items-start lg:items-center 
            gap-2 lg:gap-5 xl:gap-8
            px-6 pt-24 lg:p-0
            transition-transform duration-300 ease-in-out z-[100]
            ${isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}
          `}
        >
          {/* Menu Items */}
          <ul className="flex flex-col lg:flex-row w-full items-start lg:items-center gap-2 lg:gap-5 xl:gap-7">
            <li>
              <Link
                href="/"
                onClick={closeMenu}
                className="block py-3 lg:py-0 bg-gradient-to-r from-yellow-200 to-cyan-400 bg-clip-text text-transparent hover:opacity-70 transition font-semibold"
              >
                Home
              </Link>
            </li>

            <Dropdown title="Our Group" closeMenu={closeMenu}>
              <DropdownItem href="/about" closeMenu={closeMenu}>About Us</DropdownItem>
              <DropdownItem href="/team" closeMenu={closeMenu}>Our Leadership</DropdownItem>
            </Dropdown>

            <Dropdown title="Business Division" closeMenu={closeMenu}>
              <DropdownItem href="/ethanol" closeMenu={closeMenu}>Ethanol</DropdownItem>
              <DropdownItem href="/ddgs" closeMenu={closeMenu}>DDGS</DropdownItem>
              <DropdownItem href="/co2" closeMenu={closeMenu}>CO2</DropdownItem>
              <DropdownItem href="/bricks" closeMenu={closeMenu}>Bricks</DropdownItem>
            </Dropdown>

            <Dropdown title="Sustainability" closeMenu={closeMenu}>
              <DropdownItem href="/moef" closeMenu={closeMenu}>MOEF & CC Compliances</DropdownItem>
              <DropdownItem href="/annual" closeMenu={closeMenu}>Annual Statement</DropdownItem>
            </Dropdown>

            <Dropdown title="CSR" closeMenu={closeMenu}>
              <DropdownItem href="/health" closeMenu={closeMenu}>Health</DropdownItem>
              <DropdownItem href="/education" closeMenu={closeMenu}>Education</DropdownItem>
              <DropdownItem href="/sports" closeMenu={closeMenu}>Sports</DropdownItem>
              <DropdownItem href="/community" closeMenu={closeMenu}>Community</DropdownItem>
            </Dropdown>

            <Dropdown title="Newsroom" closeMenu={closeMenu}>
              <DropdownItem href="/bapl" closeMenu={closeMenu}>Bulletin</DropdownItem>
              <DropdownItem href="/events" closeMenu={closeMenu}>Events</DropdownItem>
            </Dropdown>

            <li>
              <Link
                href="/career"
                onClick={closeMenu}
                className="block py-3 lg:py-0 bg-gradient-to-r from-yellow-200 to-cyan-400 bg-clip-text text-transparent hover:opacity-70 transition font-semibold"
              >
                Career
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="block py-3 lg:py-0 bg-gradient-to-r from-yellow-200 to-cyan-400 bg-clip-text text-transparent hover:opacity-70 transition font-semibold"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Overlay for mobile menu */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-[90]"
            onClick={closeMenu}
          />
        )}
      </nav>
    </header>
  );
}