import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const MainNav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
<>
      <nav className="bg-[#262626] lg:text-[18px] w-full xl:h-[99px] lg:h-[70px] h-[50px] flex gap-9  justify-between items-center text-white px-7 relative">
      <div className="md:w-[120px]  ">
        <Link to="/">
         <img
          src="/img/Logo.svg"
          alt="logo img"
          className="md-w-full xl:w-[200px] w-[80px]"
        /></Link>
      </div>

      <div>
        <ul className="hidden md:flex gap-x-4 ">
              <NavLink to="/">Home</NavLink>

            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/properties">Properties</NavLink>
            <NavLink to="/service">Services</NavLink>
        </ul>
        {isMobileMenuOpen && (
          <ul className="py-4  absolute top-0 right-0 bg-[#1A1A1A] w-[50%] flex flex-col z-20 items-center gap-y-4 md:hidden">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <NavLink exact to="/about">About Us</NavLink>
            <NavLink to="/properties">Properties</NavLink>
            <NavLink to="/service">Services</NavLink>
            <NavLink className="text-white" to="/contact">
              Contact Us
            </NavLink>
            <div className="absolute  right-2 top-2">
              <div to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <IoClose size={24} />
              </div>
            </div>
          </ul>
        )}
      </div>

      <div>
        <NavLink className="hidden md:block cursor-pointer bg-[#703BF7] px-[24px] py-[16px] rounded-[10px] " to="/contact">Contact Us</NavLink>
        <div
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <CiMenuFries size={24} className="cursor-pointer" />
        </div>
      </div>


    </nav>
</>
  );
};

export default MainNav;
