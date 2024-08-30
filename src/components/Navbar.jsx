import React from "react";
import { FaClapperboard } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";
import { MdLocalMovies } from "react-icons/md";
import { GiTv } from "react-icons/gi";
import { CiBookmark } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  function handleBookmarks(e) {
    e.preventDefault();
    navigate("/bookmarks");
  }

  function handleHome(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <div className="bg-[#161D2F] w-[80px] h-screen text-white fixed flex flex-col  items-center ">
      <div className="mt-5 space-y-8">
        <FaClapperboard
          className="text-red-600 text-2xl cursor-pointer"
          onClick={handleHome}
        />
        <IoGrid
          className="text-white text-2xl cursor-pointer hover:text-red-700"
          onClick={handleHome}
        />
        <MdLocalMovies className="text-white text-2xl cursor-pointer hover:text-red-700" />
        <GiTv className="text-white text-2xl cursor-pointer hover:text-red-700" />
        <CiBookmark
          className="text-white text-2xl cursor-pointer hover:text-red-700"
          onClick={handleBookmarks}
        />
      </div>
      <div className="mt-auto mb-5">
        <img
          src="https://picsum.photos/200/300"
          alt="Profile"
          className="w-[50px] h-[50px] rounded-full border-4 border-white"
        />
      </div>
    </div>
  );
};

export default Navbar;
