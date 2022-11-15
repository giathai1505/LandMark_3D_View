import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-red-300 flex px-10 py-5 justify-between">
      <img
        src="https://cdn.dribbble.com/users/1198445/screenshots/15064463/105628281-b86efa80-5e44-11eb-821c-87d5fddb9f8a_4x.png"
        alt=""
        className="w-10"
      />
      <div className="flex gap-5 items-center">
        <Link to="/login">Login</Link>
        <Link to="/register">Logout</Link>
      </div>
    </div>
  );
};

export default Header;
