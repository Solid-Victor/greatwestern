"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
  name: string;
  link: string;
}

const Logo = ({ isOpen }: { isOpen: boolean }) => (
  <AnimatePresence>
    {!isOpen && (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.2 }}
      >
        <Link href="/" className="flex items-center space-x-3 hover:text-yellow-500 transition-colors">
          <Image
            src="/GREAT-WESTERN-FARM-PORTRIAT-LOGO.png"
            alt="Company Logo"
            width={40}
            height={40}
            className="h-8 w-auto"
            priority
          />
          <span className="text-xl font-bold text-white hidden sm:block">
            Great Western
          </span>
        </Link>
      </motion.div>
    )}
  </AnimatePresence>
);

const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <motion.div animate={isOpen ? "open" : "closed"} className="w-6 h-6 flex flex-col justify-around">
    <motion.span
      variants={{
        closed: { rotate: 0, y: 0 },
        open: { rotate: 45, y: 8 },
      }}
      className="w-6 h-0.5 bg-white block"
    />
    <motion.span
      variants={{
        closed: { opacity: 1 },
        open: { opacity: 0 },
      }}
      className="w-6 h-0.5 bg-white block"
    />
    <motion.span
      variants={{
        closed: { rotate: 0, y: 0 },
        open: { rotate: -45, y: -8 },
      }}
      className="w-6 h-0.5 bg-white block"
    />
  </motion.div>
);

const NavLink = ({ href, isActive, children, onClick }: {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className={`block transition-colors duration-200 ${
      isActive 
        ? "text-yellow-500" 
        : "text-gray-300 hover:text-yellow-500"
    }`}
  >
    {children}
  </Link>
);

const MobileNav = ({ isOpen, navItems, pathname, onClose }: {
  isOpen: boolean;
  navItems: NavItem[];
  pathname: string;
  onClose: () => void;
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-0 min-h-screen bg-[rgba(17,24,39,1)] z-50"
      >
        <div className="flex flex-col h-screen">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
            <Image
              src="/GREAT-WESTERN-FARM-PORTRIAT-LOGO.png"
              alt="Company Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <button 
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
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
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 flex flex-col items-center justify-center px-4 space-y-8">
            {navItems.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: idx * 0.1,
                  type: "spring",
                  damping: 20,
                  stiffness: 200
                }}
                className="w-full text-center"
              >
                <NavLink 
                  href={item.link}
                  isActive={pathname === item.link}
                  onClick={onClose}
                >
                  <span className="text-2xl font-medium block py-2">
                    {item.name}
                  </span>
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-800">
            <div className="text-center text-gray-400 text-sm">
              © 2024 Great Western
            </div>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export const FloatingNav = ({ navItems }: { navItems: NavItem[] }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname() ?? '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 inset-x-0 z-50 ${
        isScrolled ? "bg-[rgba(17,24,39,0.9)] backdrop-blur-md" : "bg-transparent"
      } transition-colors duration-300`}
    >
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo isOpen={isOpen} />
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 focus:outline-none"
          >
            <HamburgerIcon isOpen={isOpen} />
          </button>

          <MobileNav 
            isOpen={isOpen}
            navItems={navItems}
            pathname={pathname}
            onClose={() => setIsOpen(false)}
          />

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                href={item.link}
                isActive={pathname === item.link}
              >
                <span className="text-sm font-medium">{item.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </motion.div>
  );
};

export default FloatingNav;