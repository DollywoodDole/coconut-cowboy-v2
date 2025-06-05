"use client"; // Make Header a client component for state management

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white p-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Coconut Cowboy
        </Link>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0`}
        >
          <li>
            <Link href="/" className="block py-2 md:py-0 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="block py-2 md:py-0 hover:underline">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" className="block py-2 md:py-0 hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block py-2 md:py-0 hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}