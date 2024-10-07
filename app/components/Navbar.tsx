"use client";
import Link from "next/link";
import logo from "../../public/logo.png";
import { LINKS } from "../constants/index";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggle = () => {
    setNav(!nav);
  };

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80; // Adjust for fixed navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setNav(false); // Close the nav after clicking on a link
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 1 }}
      className="fixed top-4 z-50 flex w-full flex-col items-center justify-center"
    >
      <div className="flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg">
        <Image src={logo} alt="logo" width={80} height={32} priority />
        <div className="hidden space-x-6 lg:flex">
          {LINKS.map((link, index) => {
            return (
              <Link
                key={index}
                className={`text-sm ${index !== 0 ? "border-l-2 border-neutral-300/20 pl-2" : ""} hover:opacity-50`}
                href={`#${link.targetId}`}
                onClick={(event) => handleScroll(event, link.targetId)} // Correctly call handleScroll
              >
                {link.text}
              </Link>
            );
          })}
        </div>
        <div className="lg:hidden" onClick={toggle}>
          <button>{nav ? <FaTimes /> : <FaBars />}</button>
        </div>
      </div>

      {nav && (
        <div className="w-full backdrop-blur-lg lg:hidden">
          {LINKS.map((link, index) => {
            return (
              <Link
                key={index}
                href={`#${link.targetId}`}
                className="block p-4 uppercase -tracking-tighter"
                onClick={(event) => handleScroll(event, link.targetId)} // Correctly call handleScroll
              >
                {link.text}
              </Link>
            );
          })}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
