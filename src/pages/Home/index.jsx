import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { homeParts } from "./data";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="flex gap-6">
        {homeParts.map((item, index) => {
          return (
            <Link to={item.path} key={index}>
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
