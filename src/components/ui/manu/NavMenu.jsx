import React from 'react';
import { NavLink } from 'react-router';

const NavMenu = ({ to, children, className, icon }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `font-medium text-lg rounded-lg p-1 mr-2 px-3  ${className} ${isActive ? " bg-[#244D3F] text-white " : ""}`
      }
    >
      {icon}
      {children}
    </NavLink>
  );
};

export default NavMenu;