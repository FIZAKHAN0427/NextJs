"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`navbar ${hidden ? 'navbar-hidden' : ''} fixed w-full top-0 z-50 p-2 transition-all duration-300 bg-white shadow-md`}>
      <div className="flex justify-between items-center">
        <div className="logo">
          <Image src="/logo.png" alt="Logo" width={200} height={50} />
        </div>
        <input type="checkbox" id="nav-toggle" className="hidden" checked={menuOpen} onChange={toggleMenu} />
        <label htmlFor="nav-toggle" className="nav-toggle-label cursor-pointer p-2 flex flex-col md:hidden">
          <span className={`block bg-black h-0.5 w-6 my-1 transition-all duration-300 ${menuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block bg-black h-0.5 w-6 my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block bg-black h-0.5 w-6 my-1 transition-all duration-300 ${menuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
        </label>
        <div className={`links flex-col md:flex md:flex-row md:items-center md:w-auto ${menuOpen ? 'flex' : 'hidden'} p-5 md:p-0`}>
          <Link href="/" className="link text-black text-base no-underline p-5 hover:text-yellow-300">
            HOME
          </Link>
          <div className="dropdown relative group">
            <Link href="/about" className="link text-black text-base no-underline p-5 hover:text-yellow-300">
              ABOUT US
            </Link>
            <div className="dropdown-menu absolute hidden group-hover:flex flex-col bg-white shadow-md p-2">
              <Link href="/about#about" className="link text-black text-base no-underline p-2.5 hover:text-yellow-300">
                WHO WE ARE
              </Link>
              <Link href="/about#our-story" className="link text-black text-base no-underline p-2.5 hover:text-yellow-300">
                SERVICES
              </Link>
              <Link href="/about#why-us" className="link text-black text-base no-underline p-2.5 hover:text-yellow-300">
                WHY US
              </Link>
            </div>
          </div>
          <div className="dropdown relative group">
            <Link href="/projects" className="link text-black text-base no-underline p-5 hover:text-yellow-300">
              PROJECTS
            </Link>
            <div className="dropdown-menu absolute hidden group-hover:flex flex-col bg-white shadow-md p-2">
              <Link href="/projects#ourProcess" className="link text-black text-base no-underline p-2.5 hover:text-yellow-300">
                OUR PROCESS
              </Link>
              <Link href="/projects#designApproach" className="link text-black text-base no-underline p-2.5 hover:text-yellow-300">
                DESIGN APPROACH
              </Link>
              <Link href="/projects#ourCollection" className="link text-black text-base no-underline p-2.5 hover:text-yellow-300">
                OUR COLLECTION
              </Link>
              <Link href="/projects#ourWork" className="link text-black text-base no-underline p-2.5 hover:text-yellow-300">
                OUR WORK
              </Link>
            </div>
          </div>
          <Link href="/contact" className="link text-black text-base no-underline p-5 hover:text-yellow-300">
            CONTACT US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
