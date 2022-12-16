import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { homeParts } from "./data";
import lmImg from "../../assests/landmark-overview.jpg";
import { BsArrowRight } from "react-icons/bs";
import { Footer } from "../../components/Footer";
import { ToastContainer } from "react-toastify";

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
          <img
            src={lmImg}
            className="mt-[80px] h-[88vh] w-full object-cover "
          />

          <div className="absolute ml-[150px] top-[180px] text-white flex flex-col gap-2">
            <p className=" ml-10 text-[25px] md:text-[18px] lg:text-[25px] sm:text-[16px]">
              The super-tall skyscraper in Vietnam
            </p>
            <h1 className=" ml-10 font-bold text-6xl md:text-4xl lg:text-7xl sm:text-3xl">
              LANDMARK81
            </h1>
            <p className=" ml-10 text-[16px] leading-5 mt-2 text-opacity-80 max-w-[400px] md:max-w-[400px] lg:max-w-[500px] sm:max-w-[200px]">
              Located from the 79th to the 81st floor, the Landmark 81
              Observatory is the perfect place to enjoy panoramic views of Ho
              Chi Minh City. In particular, visitors can see a close-up of the
              city’s famous sights through a telescope and the most advanced
              touchscreen system, giving them special feelings.
            </p>
            <button className="ml-10 rounded-full px-4 py-1 mt-4 inline-block w-[200px]">
              <Link to="/3dview">View 3D GIS</Link>
            </button>
          </div>
        </div>

        <div className="w-full h-screen bg-zinc-200 ">
          <div className="max-w-[1240px] mx-auto relative">
            <div className="px-4 py-2">
              <h3 className="text-3xl mt-[60px] font-bold text-center ">
                WHAT WE HAVE...
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 sm:pt-20 mb-20">
              <div className="bg-white rounded-xl shadow-2xl ">
                <div className="p-6">
                  <h5 className="font-bold text-2xl my-4">View GIS 3D</h5>
                  <p className="text-gray-600 text-[18px] text-justify ">
                    An overview of Landmark 3D Geographic Information Systems to
                    observe seven buildings including the highest skyscaper of
                    Vietnam up to this point. 3D GIS brings real-world context
                    to maps and data.
                  </p>
                </div>

                <div className="bg-slate-100 pl-8 py-4">
                  <p className="flex items-center text-indigo-600">
                    <Link to="/3dview">View</Link>{" "}
                    <BsArrowRight className="w-5 ml-2" />
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-2xl ">
                <div className="p-6">
                  <h5 className="font-bold text-2xl my-4">Details</h5>
                  <p className="text-gray-600 text-[18px] text-justify ">
                    Discovering a variety of detail information about Landmark
                    81 buildings including address, road, activities,
                    viewing,... to introduce some attraction points for
                    tourists.
                  </p>
                </div>

                <div className="bg-slate-100 pl-8 py-4">
                  <p className="flex items-center text-indigo-600">
                    <Link to="/detail">Read</Link>{" "}
                    <BsArrowRight className="w-5 ml-2" />
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-2xl ">
                <div className="p-6">
                  <h5 className="font-bold text-2xl my-4">CONTACT US</h5>
                  <p className="text-gray-600 text-[18px] text-justify ">
                    Please giving any message about our website for us to
                    improve your experience. You can also share your excitement
                    with us. It will bings to us great motivation for doing in
                    the future.
                  </p>
                </div>

                <div className="bg-slate-100 pl-8 py-4">
                  <p className="flex items-center text-indigo-600">
                    <Link to="/contact">View</Link>{" "}
                    <BsArrowRight className="w-5 ml-2" />
                  </p>
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
