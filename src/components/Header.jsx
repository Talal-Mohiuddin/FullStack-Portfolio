import React from "react";

const Header = ({ scrolling }) => {
  return (
    <header
      className={`${
        scrolling ? "border-b border-gray-900" : ""
      } fixed left-0 right-0 top-0 z-20`}
      id="home"
    >
      <div className="container m-auto px-4 py-6  bg-black">
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
          <div>
            <h1 className="font-bold text-2xl">
              Talal <span className="text-[#1267A7]">Portoflio</span>
            </h1>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-[#1267A7] cursor-pointer"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  className="text-gray-400 hover:text-[#1267A7] cursor-pointer"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#additional"
                  className="text-gray-400 hover:text-[#1267A7] cursor-pointer"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
