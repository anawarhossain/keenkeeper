import React from "react";
import KeenKeeperLogo from "../../assets/logo.png";
import NavMenu from "../../components/ui/manu/NavMenu";
import { IoHomeOutline } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
  return (
    <div className="shadow-sm bg-white">
      <div className="navbar lg:w-[90%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavMenu to={"/"} icon={<IoHomeOutline />}>
                  Home
                </NavMenu>
              </li>
              <li>
                <NavMenu to={"/timeline"} icon={<RiTimeLine />}>
                  Timeline
                </NavMenu>
              </li>
              <li>
                <NavMenu to={"/stats"} icon={<ImStatsDots />}>
                  Stats
                </NavMenu>
              </li>
            </ul>
          </div>
          <img src={KeenKeeperLogo} alt="KeenKeeper Logo" />
        </div>
        <div className="navbar-end hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavMenu to={"/"} icon={<IoHomeOutline />}>
                Home
              </NavMenu>
            </li>
            <li>
              <NavMenu to={"/timeline"} icon={<RiTimeLine />}>
                Timeline
              </NavMenu>
            </li>
            <li>
              <NavMenu to={"/stats"} icon={<ImStatsDots />}>
                Stats
              </NavMenu>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
