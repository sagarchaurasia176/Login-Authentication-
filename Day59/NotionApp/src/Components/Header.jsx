//router-dom imp
import { NavLink } from "react-router-dom";

import ButtonLogic from "./ButtonLogic";

function Header() {
  //recived the props here

  return (
    <div>
      <nav className=" bg-slate-950  shadow-2xl p-4">
        <div className="  w-3/4 @media (min-width: 768px)  m-auto flex justify-evenly ">
          {/* Logo */}
          <a href="#" className="text-white font-bold text-xl">
            JMS
          </a>

          {/* Mobile Menu Button */}
          <button className="block lg:hidden text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {/* Navigation Links */}
          <div className="hidden lg:flex flex-grow  justify-between items-center">
            <ul className=" flex   gap-16 text-center  justify-around  ml-80  ">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/About">About</NavLink>
              </li>

              <li>
                <NavLink to="/About"></NavLink>
              </li>
            </ul>

            {/* button */}
            <ButtonLogic />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
