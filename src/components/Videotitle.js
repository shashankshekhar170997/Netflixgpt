import React from "react";
// passing props
const Videotitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-3 md:my-0">
        <button className="bg-white text-black py-2 md:py-4 px-4 md:px-12  text-xl  rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12  text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default Videotitle;
