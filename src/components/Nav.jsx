import React, { useState, useContext } from "react";
import { ProductContext } from "../Utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [products] = useContext(ProductContext);

  let distinct_category = [...new Set(products?.map((p) => p.category))];

  return (
    <>
      {/* Top nav for mobile and tablets */}
      <div className="lg:hidden w-full flex items-center justify-between bg-indigo-600 p-4 fixed top-0 z-30 shadow-md">
        <h1 className="text-xl font-bold text-white">A</h1>
        <button
          onClick={() => setMenuOpen(true)}
          className="text-white text-3xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Sidebar for desktop only */}
      <nav className="hidden lg:flex flex-col w-[15%] text-white shadow-lg p-6 h-screen sticky top-0">
        <Link
          to="/create"
          className="mb-6 font-semibold text-lg hover:text-indigo-600"
        >
          ➕ Add Product
        </Link>
        <h2 className="text-xl font-bold mb-4">Category Filter</h2>
        {distinct_category.map((c, i) => (
          <Link
            key={i}
            to={`/?category=${c}`}
            className="flex items-center gap-2 mb-3 hover:text-indigo-600"
          >
            <span className="w-4 h-4 bg-indigo-500 rounded-full"></span>
            {c.toUpperCase()}
          </Link>
        ))}
      </nav>

      {/* Sidebar drawer for mobile & tablets */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Overlay */}
          <div
            className="bg-black opacity-40 w-full"
            onClick={() => setMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="w-[80%] max-w-xs bg-black text-white shadow-xl p-5 flex flex-col">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-bold">Categories</h2>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-bold"
              >
                ✖
              </button>
            </div>

            <Link
              to="/create"
              className="mb-4 font-semibold text-lg text-indigo-600"
              onClick={() => setMenuOpen(false)}
            >
              ➕ Add Product
            </Link>

            <h3 className="text-lg text-white font-semibold mb-2">Category Filter</h3>
            {distinct_category.map((c, i) => (
              <Link
                key={i}
                to={`/?category=${c}`}
                className="flex items-center gap-2 mb-3 text-white"
                onClick={() => setMenuOpen(false)}
              >
                <span className="w-4 h-4 bg-indigo-500 rounded-full"></span>
                {c.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
