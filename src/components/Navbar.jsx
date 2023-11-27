import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import styles from "../style";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
      <nav className="transparent flexBetween z-10 py-6 ">
        <h1 className="logo bold-20">KANKAR</h1>

        <ul className="list-none hidden md:flexEnd flex-1 regular-16 cursor-pointer text-white gap-10">
          {navLinks.map((nav, index) => (
            <li
              key={index}
              className=""
            >
                {nav.title}
            </li>
          ))}
        </ul>

        <div className="md:hidden flexEnd flex-1">
            <img src={toggle ? close : menu} alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle((prev) => !prev)}
            />

            <div className={`${toggle ? 'flex' : 'hidden'} p-14 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[260px] rounded-xl sidebar box-shadow`}>
              <ul className="list-none flexEnd flex-col flex-1 regular-16 cursor-pointer text-white gap-10">
                {navLinks.map((nav, index) => (
                  <li
                    key={index}
                    className=""
                  >
                    <a href={`#{nav.title}`}>
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </nav>
  )
}

export default Navbar;