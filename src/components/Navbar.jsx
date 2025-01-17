import React, { useState } from "react";
import logo from "../assets/frontend_assets/logo.png";
import search from "../assets/frontend_assets/search_icon.png";
import profile_icon from "../assets/frontend_assets/profile_icon.png";
import { Link, NavLink } from "react-router-dom";
import Cart from "../assets/frontend_assets/cart_icon.png";
import dropdown from "../assets/frontend_assets/dropdown_icon.png";
import Menu from "../assets/frontend_assets/menu_icon.png";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <React.Fragment>
      <div className="flex items-center justify-between py-5 font-medium">
        <img src={logo} className="w-36" alt="Logo" />
        <ul className="sm:flex gap-5 text-sm text-gray-700 hidden">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className="w-2/3 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to="/collection"
            className="flex flex-col items-center gap-1"
          >
            <p>COLLECTION</p>
            <hr className="w-2/3 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className="w-2/3 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className="w-2/3 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>
        <div className="flex items-center gap-6">
          <img src={search} className="w-5 cursor-pointer" alt="search_icon" />
          <div className="group relative">
            <img
              src={profile_icon}
              className="w-5 cursor-pointer"
              alt="profile_icon"
            />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>
          <Link className="relative" to="/cart">
            <img src={Cart} className="w-5 min-w-5" alt="Cart" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 flex items-center justify-center bg-black text-white aspect-square rounded-full text-[8px]">
              0
            </p>
          </Link>
          <img onClick={() => setVisible(!visible)} src={Menu} className="w-5 cursor-pointer sm:hidden" alt="menu" />
        </div>
        {/* Side Menu For Small Screens */}
        <div className={`absolute top-0 left-0 bottom-0 overflow-hidden bg-white z-10 transition-all ${visible ? "w-full" :"w-0"}`}>
          <div className="flex flex-col text-gray-500">
            <div className="flex items-center gap-4 p-3">
              <img onClick={() => setVisible(!visible)} src={dropdown} className="h-4 rotate-180 cursor-pointer" alt="dropdown" />
              <p>Back</p>
            </div>
            <NavLink className="py-2 pl-6 border"  onClick={() => setVisible(!visible)} to="/">HOME</NavLink>
            <NavLink className="py-2 pl-6 border"  onClick={() => setVisible(!visible)} to="/collection">COLLECTION</NavLink>
            <NavLink className="py-2 pl-6 border"  onClick={() => setVisible(!visible)} to="/about">ABOUT</NavLink>
            <NavLink className="py-2 pl-6 border"  onClick={() => setVisible(!visible)} to="/contact">CONTACT</NavLink>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;