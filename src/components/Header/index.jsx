import React, { useState } from "react";
import { Link } from "react-router-dom";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Header = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    // <div className="bg-red-300 flex px-10 py-5 justify-between">
    //   <img
    //     src="https://cdn.dribbble.com/users/1198445/screenshots/15064463/105628281-b86efa80-5e44-11eb-821c-87d5fddb9f8a_4x.png"
    //     alt=""
    //     className="w-10"
    //   />
    //   <div className="flex gap-5 items-center">
    //     <Link to="/login">Login</Link>
    //     <Link to="/register">Logout</Link>
    //   </div>
    // </div>

    <div className="w-screen h-[80px] z-10 fixed bg-zinc-200 drop-shadow-lg ">
      <div className=" px-10 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold mr-10 sm:text-3xl ">
            <Link to='/'>LMGIS</Link>
          </h1>

          <ul className="hidden md:flex">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/3dview'>3DView</Link> 
            </li>
            <li>
              <Link to='/detail'>Detail</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <button className="border-none bg-transparent text-black mr-4 ">
            <Link to='/login'>Sign In</Link>
          </button>
          <button className="px-5 py-2 mr-5">
            <Link to='/register'>Sign Up</Link>
          </button>
        </div>

        <div className="md:hidden" onClick={handleNav}>
          {!nav ? <AiOutlineMenu size={30} />: <AiOutlineClose size={30} />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to='/'>Home</Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to='/3dview'>3DView</Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to='/detail'>Detail</Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to='/contact'>Contact</Link>
        </li>
        <div className="flex flex-col my-4">
          <button className=" bg-transparent text-black mb-4 px-8 py-3 ">
            <Link to='/login'>Sign In</Link>
          </button>
          <button className="px-5 py-2">
            <Link to='/register'>Sign Up</Link>
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Header;
