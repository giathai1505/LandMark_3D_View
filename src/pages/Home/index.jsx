import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { homeParts } from "./data";
import lmImg from '../../assests/landmark-overview.jpg'
import {BsArrowRight} from "react-icons/bs";
import { Footer } from "../../components/Footer";

const HomePage = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      
      {/* <div className="flex gap-6">
        {homeParts.map((item, index) => {
          return (
            <Link to={item.path} key={index}>
              {item.title}
            </Link>
          );
        })}
      </div> */}

      <div className="w-full h-screen flex flex-col justify-between">
        <div>
          <img src={lmImg} className="mt-[80px] h-[88vh] w-full object-cover " />
        
          <div className="absolute top-[180px] text-white">
            <p className=" ml-10 text-[25px] md:text-[18px] lg:text-[25px] sm:text-[16px]">The super-tall skyscraper in Vietnam</p>
            <h1 className=" ml-10 font-bold text-6xl md:text-4xl lg:text-7xl sm:text-3xl">LANDMARK81</h1>
            <p className=" ml-10 text-[14px] leading-4 mt-2 text-opacity-80 max-w-[400px] md:max-w-[400px] lg:max-w-[500px] sm:max-w-[200px]">Located from the 79th to the 81st floor, the Landmark 81 Observatory is the perfect place to enjoy panoramic views of Ho Chi Minh City. In particular, visitors can see a close-up of the city’s famous sights through a telescope and the most advanced touchscreen system, giving them special feelings.</p>
            <button className="ml-10 rounded-full px-4 py-1 mt-4">
              <Link to='/3dview'>View 3D GIS</Link>
            </button>
          </div>
        </div>

        <div className="w-full h-screen bg-zinc-200 "> 
          <div className="max-w-[1240px] mx-auto relative">
            <div className="px-4 py-2">
              <h3 className="text-3xl mt-[60px] font-bold text-center ">WHAT WE HAVE...</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 sm:pt-20 mb-20">
              <div className="bg-white rounded-xl shadow-2xl ">
                <div className="p-6">
                  <h5 className="font-bold text-2xl my-4">View GIS 3D</h5>
                  <p className="text-gray-600 text-[18px] text-justify ">Orange lava shooting up from a volcanic vent in the Reykjanes Peninsula, Iceland, and mountaintop shadows cast on a glacier in Yukon, Canada are among the winning subjects of the second annual Natural Landscape Photography Award .</p>
                </div>

                <div className="bg-slate-100 pl-8 py-4">
                  <p className="flex items-center text-indigo-600">
                    <Link to='/3dview'>View</Link> <BsArrowRight className="w-5 ml-2"/></p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-2xl ">
                <div className="p-6">
                  <h5 className="font-bold text-2xl my-4">Details</h5>
                  <p className="text-gray-600 text-[18px] text-justify ">Orange lava shooting up from a volcanic vent in the Reykjanes Peninsula, Iceland, and mountaintop shadows cast on a glacier in Yukon, Canada are among the winning subjects of the second annual Natural Landscape Photography Award .</p>
                </div>

                <div className="bg-slate-100 pl-8 py-4">
                  <p className="flex items-center text-indigo-600">
                  <Link to='/detail'>Read</Link>  <BsArrowRight className="w-5 ml-2"/></p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-2xl ">
                <div className="p-6">
                  <h5 className="font-bold text-2xl my-4">Images</h5>
                  <p className="text-gray-600 text-[18px] text-justify ">Orange lava shooting up from a volcanic vent in the Reykjanes Peninsula, Iceland, and mountaintop shadows cast on a glacier in Yukon, Canada are among the winning subjects of the second annual Natural Landscape Photography Award .</p>
                </div>

                <div className="bg-slate-100 pl-8 py-4">
                  <p className="flex items-center text-indigo-600">
                  <Link to='/images'>View</Link>  <BsArrowRight className="w-5 ml-2"/></p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        
      </div>
    </div>
  );
};

export default HomePage;
