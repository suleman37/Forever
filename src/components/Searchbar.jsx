import React, { useContext, useEffect, useState } from "react";
import searchicon from "../assets/frontend_assets/search_icon.png";
import crossicon from "../assets/frontend_assets/cross_icon.png";
import { ShopContext } from "../context/ShopContext";

const Searchbar = () => {
  const { search, setSearch, showsearch, setShowSearch } =
    useContext(ShopContext);
  const [isVisible, setIsVisible] = useState(true);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleCloseClick = () => {
    setSearch("");
    setShowSearch(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < window.innerHeight / 3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-20 top-20 flex items-start justify-center bg-transparent transition-opacity duration-300 ${
        showsearch && isVisible
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`relative w-full max-w-lg mx-auto p-4 bg-white rounded-lg shadow-lg transform transition-transform duration-300 ${
          showsearch && isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ border: "1px solid gray" }}
      >
        <button
          className="absolute right-0 top-0 mt-2 mr-2 text-gray-600"
          onClick={handleCloseClick}
        >
          <img src={crossicon} alt="Close" className="w-2 h-2" />
        </button>
        <input
          type="text"
          value={search}
          onChange={handleInputChange}
          placeholder="Search for products..."
          className="w-full px-6 py-3 text-gray-700 bg-transparent border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="absolute right-0 top-0 mt-7 mr-7 text-gray-600 hover:text-blue-500"
          onClick={() => setSearch("")}
        >
          <img src={searchicon} alt="Search" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
