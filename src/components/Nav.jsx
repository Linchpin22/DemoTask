import React, { useState } from 'react';
import { ProductContext } from '../Utils/Context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // For handling menu toggle in mobile view

  const [products] = useContext(ProductContext);
  let distinct_category = products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];

  return (
    <nav className="w-full md:w-[15%] bg-zinc-200 text-black drop-shadow-lg flex flex-col items-center md:items-start md:pt-5 md:h-full relative">
      {/* Hamburger Menu for mobile view */}
      <div className="w-full flex justify-between items-center p-4 md:hidden">
        <h1 className="text-xl hidden md:block font-bold">Product Categories</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl">
          {menuOpen ? '✖' : '☰'} {/* Changes icon based on the menu state */}
        </button>
      </div>

      {/* Overlay for closing menu when clicking outside */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-10 bg-black opacity-30"
          onClick={() => setMenuOpen(false)} // Closes the menu when overlay is clicked
        />
      )}

      {/* Sidebar Menu */}
      <div
        className={`${
          menuOpen ? 'block' : 'hidden'
        } w-[80%] md:w-full bg-zinc-200 md:block md:relative absolute z-20 top-0 left-0 md:translate-x-0 transition-transform transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <a
          className="py-3 px-5 border-4 rounded font-semibold text-xl border-zinc-900 text-blue-500 hover:bg-blue-500 hover:text-black hover:border-zinc-200 block text-center md:text-left mb-4 md:mb-0"
          href="/create"
        >
          Add New Product
        </a>

        <hr className="my-3 w-[80%] mx-auto md:mx-0" />

        <h1 className="text-2xl font-bold mb-3 w-[80%] mx-auto md:mx-0">Category Filter</h1>

        <div className="w-[80%] mx-auto md:mx-0">
          {distinct_category.map((c, i) => (
            <Link
              key={i}
              to={`/?category=${c}`}
              className="flex items-center font-semibold mb-3"
              onClick={() => setMenuOpen(false)} // Close menu when a category is clicked
            >
              <span className="rounded-full mr-2 w-[15px] h-[15px] bg-blue-500"></span>
              {c.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
