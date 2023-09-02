import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="bg-lime-400 px-[8px] font-bold flex items-center gap-3">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/convention">Conventional Query</NavLink>
      <NavLink to="/rq-query">React Query</NavLink>
    </div>
  );
}

export default Navbar;
