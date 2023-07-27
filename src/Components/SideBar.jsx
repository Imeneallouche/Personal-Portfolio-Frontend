import React from "react";
import { SideBarElements } from "../Data/Sidebar";
function SideBar() {
  return (
    <div className="flex justify-between items-center px-10">
      <div className="pr-20">
        <img
          src={require("../Assets/logo.png")}
          className="w-40 h-40 cursor-pointer"
          alt="logo"
        />
      </div>

      <ul className="flex justify-between flex-1">
        {SideBarElements.map((element, index) => (
          <li
            className={`px-5 py-3 hover:text-brown cursor-pointer ${
              element.different
                ? "text-red border border-red hover:border-brown"
                : "text-light-grey"
            }`}
          >
            {element.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;