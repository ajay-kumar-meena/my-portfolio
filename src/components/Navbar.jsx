import React, { useState } from "react";
import logo from '../assets/logos/ajay-logo.jpg'
import { MdOutlineMenu as OpenMenu } from "react-icons/md";
import { IoMdClose as CloseMenu } from "react-icons/io";
import { MenuItems } from "./data";
import { Link } from "react-scroll";

const Navbar = () => {

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => setIsOpenMenu((prev) => !prev)

  return (<>
    <div id="navbar" className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex justify-between items-center h-16">
        <div className=" flex space-x-2">
          <img src={logo} className="h-12 w-12 rounded-full" alt="" />
          <h1 className="font-semibold text-xl cursor-pointer">
            Aja<span className="text-green-500 text-2xl">y Meena</span>
            <p className="text-sm">full Stack Web Developer</p>
          </h1>
        </div>

        {/* menu & links for desktop */}
        <div>
          <ul className="hidden md:flex space-x-8">
            {
              MenuItems.map(({ id, name }) => (
                <li
                  className="hover:scale-125 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={name}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {name}
                  </Link>
      
                </li>
              ))
            }
          </ul>
        </div>

        <div className="md:hidden">
          {
            !isOpenMenu ? < OpenMenu fontSize={35} onClick={toggleMenu} />
              : <CloseMenu fontSize={35} onClick={toggleMenu} />
          }
        </div>
      </div>

      {/* for mobile device */}

      {isOpenMenu && (
        <div className="bg-white">
          <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
            {
              MenuItems.map(({ id, name }) => (
                <li
                  className="hover:scale-125 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={name}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {name}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>)
      }
    </div>
  </>)
}

export default Navbar;