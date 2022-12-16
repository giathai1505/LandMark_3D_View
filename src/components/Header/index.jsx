import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose, AiOutlineLogout } from "react-icons/ai";
import Login from "../../pages/Auth/Login";
import Register from "../../pages/Auth/Register";
import { ee } from "../../pages/3DView/AskForCommentDialog";
import userImg from "../../assests/user.png";
const Header = () => {
  const [nav, setNav] = useState(false);
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [isShowRegister, setIsShowRegister] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    let userInfo = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : {};
    setUserInfo(userInfo);
  }, []);

  ee.on("message", function (text) {
    setIsShowLogin(true);
  });

  const handleLoginSuccess = () => {
    setIsShowLogin(false);
    let userInfo = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : {};
    setUserInfo(userInfo);
  };

  const handleLogout = () => {
    //handle logout
    localStorage.removeItem("userInfo");
    setUserInfo({});
  };
  return (
    <div className="w-screen h-[80px] z-10 fixed bg-zinc-200 drop-shadow-lg ">
      <div className=" px-10 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold mr-10 sm:text-3xl ">
            <Link to="/">LMGIS</Link>
          </h1>

          <ul className="hidden md:flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/3dview">3DView</Link>
            </li>
            <li>
              <Link to="/detail">Detail</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </div>
        {userInfo.username ? (
          <div className="flex gap-10">
            <div className="flex gap-2 items-center mr-10">
              <img src={userImg} alt="" className="w-[40px]" />
              <span className="text-lg font-medium">{userInfo.username}</span>
            </div>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={handleLogout}
            >
              <AiOutlineLogout className="text-lg" />
              <span>Log out</span>
            </div>
          </div>
        ) : (
          <div className="my-4 flex items-center gap-2">
            <button
              className=" bg-transparent text-black px-5 py-2 "
              onClick={() => setIsShowLogin(true)}
            >
              Sign in
            </button>
            <button
              className="px-5 py-2"
              onClick={() => setIsShowRegister(true)}
            >
              Sign up
            </button>
          </div>
        )}
        <div className="md:hidden" onClick={handleNav}>
          {!nav ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="/">Home</Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="/3dview">3DView</Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="/detail">Detail</Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="/contact">Contact</Link>
        </li>
        {userInfo.username ? (
          <div className="flex gap-2 items-center mr-10">
            <img src={userImg} alt="" className="w-[40px]" />
            <span className="text-lg font-medium">{userInfo.username}</span>
          </div>
        ) : (
          <div className="flex flex-col my-4">
            <button
              className=" bg-transparent text-black mb-4 px-8 py-3 "
              onClick={() => setIsShowLogin(true)}
            >
              Sign in
            </button>
            <button
              className="px-5 py-2"
              onClick={() => setIsShowRegister(true)}
            >
              Sign up
            </button>
          </div>
        )}
      </ul>

      <Login
        isShow={isShowLogin}
        onOk={handleLoginSuccess}
        onCancel={() => setIsShowLogin(false)}
      />
      <Register
        isShow={isShowRegister}
        onOk={() => setIsShowRegister(false)}
        onCancel={() => setIsShowRegister(false)}
      />
    </div>
  );
};

export default Header;
