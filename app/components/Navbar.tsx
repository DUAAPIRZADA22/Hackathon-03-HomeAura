"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai"; 
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="bg-white relative">
      <nav className="flex items-center justify-between px-5 border-b border-gray-200">
        <div className="flex gap-4 text-[16px] text-black">
          <Link href="/" className="hidden sm:inline">
            Home
          </Link>
          <Link href="/about" className="hidden sm:inline">
            About
          </Link>
          <Link href="/products" className="hidden sm:inline">
            Products
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-3xl tracking-wide font-extrabold font-clash-display">
            Avion
          </h1>
        </div>

        <div className="flex justify-end gap-4 text-black">
          <Link href="/wishlist">
            <AiOutlineHeart className="w-5 h-5" /> {/* Heart Icon */}
          </Link>
          <Link href="/cart">
            <FiShoppingCart className="w-5 h-5" />
          </Link>
          <Link href="/">
            <VscAccount className="w-5 h-5" />
          </Link>
          <GiHamburgerMenu
            className="w-6 h-6 sm:hidden cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="bg-black bg-opacity-50 w-full h-full"
            onClick={closeMenu}
          ></div>

          <div className="bg-white w-[250px] h-full shadow-md p-6">
            <div className="flex flex-col items-start">
              {/* Items in Hamburger Menu */}
              <Link href="/" className="text-center text-[16px] py-2" onClick={closeMenu}>
                Home
              </Link>
              <Link href="/about" className="text-center text-[16px] py-2" onClick={closeMenu}>
                About
              </Link>
              <Link href="/products" className="text-center text-[16px] py-2" onClick={closeMenu}>
                Products
              </Link>
              {[
                "Plant pots",
                "Ceramics",
                "Tables",
                "Chairs",
                "Crockery",
                "Tableware",
                "Cutlery",
              ].map((item, index) => (
                <span key={index} className="text-center text-[16px] py-2">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="justify-center items-start sm:h-[200px] mb-0 font-satoshi text-[18px] mt-2 text-gray-500 font-light sm:block hidden">
        <div className="grid gap-2 sm:gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-7 sm:flex sm:justify-center">
          {[
            "Plant pots",
            "Ceramics",
            "Tables",
            "Chairs",
            "Crockery",
            "Tableware",
            "Cutlery",
          ].map((item, index) => (
            <span
              key={index}
              className="text-center text-[16px] sm:text-[18px] px-2"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;



















