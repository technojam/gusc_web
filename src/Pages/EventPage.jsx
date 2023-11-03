import React from "react";

const EventPage = () => {
  return (
    <div>
      <div className="bg-red-700 p-12 text-center text-white">
        <p className="text-4xl">Galgotias University Student Council</p>
        <p className="text-7xl font-bold mt-2">Events</p>
      </div>
      <div className="bg-white pb-16 ">
        <div className="h-24 px-28 py-14 pb-20 flex justify-between">
          <span className="text-2xl font-semibold">Event Name</span>
          <span className="text-2xl font-semibold">Date</span>
        </div>
        <div className="px-28  h-[358px] flex">
          <div className="  h-[310px] w-[540px] bg-slate-400 mx-30">
          </div>
          <div className=" w-[750px] h-[310px] px-28 flex flex-col ">
            <span className="h-[85%] ">EVENT DESCRIPTION</span>
            <button className="h-[15%] w-36 bg-blue-800 text-white rounded-xl">Register Now</button>
          </div>
        </div>
      <div className="h-[2px] w-[70%] bg-slate-900 mx-[20%]"></div>
      </div>
    </div>
  );
};

export default EventPage;
