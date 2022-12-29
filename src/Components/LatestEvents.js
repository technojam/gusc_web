import React from "react";

function EventComponent() {
  return (
    <section className="bg-red-700 relative w-[100vw] h-[100vh] flex justify-center items-center text-white">
      <div className="grid md:grid-cols-[40%_60%] w-[80%]">
        <div className="flex flex-col md:gap-8 h-[600px] ">
          <h1 className="text-3xl font-bold">Our Latest Events</h1>
          <div className="flex flex-col justify-end h-[100%] relative text-black bg-[#ffffff90]">
            <div className="carousel w-full h-[80%]">
              <div id="slide1" className="carousel-item relative w-full">
                <img
                  src="https://images.unsplash.com/photo-1671180881490-8af6e9c3eaf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MjI0OTk3MQ&ixlib=rb-4.0.3&q=80&w=1080"
                  className="w-full"
                />
                <div className="absolute flex justify-between transform translate-y-1/2 left-5 right-5 top-1/2">
                  <a
                    href="#slide4"
                    className="btn btn-circle text-white bg-black hover:invert"
                  >
                    ❮
                  </a>
                  <a
                    href="#slide2"
                    className="btn btn-circle text-white bg-black hover:invert"
                  >
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img
                  src="https://images.unsplash.com/photo-1671180881490-8af6e9c3eaf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MjI0OTk3MQ&ixlib=rb-4.0.3&q=80&w=1080"
                  className="w-full"
                />
                <div className="absolute flex justify-between transform translate-y-1/2 left-5 right-5 top-1/2">
                  <a
                    href="#slide1"
                    className="btn btn-circle text-white bg-black hover:invert"
                  >
                    ❮
                  </a>
                  <a
                    href="#slide3"
                    className="btn btn-circle text-white bg-black hover:invert"
                  >
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img
                  src="https://images.unsplash.com/photo-1671180881490-8af6e9c3eaf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MjI0OTk3MQ&ixlib=rb-4.0.3&q=80&w=1080"
                  className="w-full"
                />
                <div className="absolute flex justify-between transform translate-y-1/2 left-5 right-5 top-1/2">
                  <a
                    href="#slide2"
                    className="btn btn-circle text-white bg-black hover:invert"
                  >
                    ❮
                  </a>
                  <a
                    href="#slide4"
                    className="btn btn-circle text-white bg-black hover:invert"
                  >
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img
                  src="https://images.unsplash.com/photo-1671180881490-8af6e9c3eaf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MjI0OTk3MQ&ixlib=rb-4.0.3&q=80&w=1080"
                  className="w-full"
                />
                <div className="absolute flex justify-between transform translate-y-1/2 left-5 right-5 top-1/2">
                  <a
                    href="#slide3"
                    className="btn btn-circle text-white bg-black hover:invert"
                  >
                    ❮
                  </a>
                  <a
                    href="#slide1"
                    className="btn btn-circle text-white bg-black hover:invert"
                  >
                    ❯
                  </a>
                </div>
              </div>
            </div>
            {/* <img src="https://images.unsplash.com/photo-1671180881490-8af6e9c3eaf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MjI0OTk3MQ&ixlib=rb-4.0.3&q=80&w=1080" alt="" class="absolute top-0 h-[75%]"> */}
            <div className="z-10 m-6">
              <h1 className="text-2xl font-extrabold">Unifest</h1>
              <p className="font-semibold">North-India's Biggest Fest</p>
              <p className="font-semibold">11-12 April 2022</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:grid-rows-[68px_1fr_1fr] h-[600px]">
          <button className="col-span-2 px-8 bg-[#fff] text-[#AA0A1D] place-self-end self-start drop-shadow-[0_5px_10px_rgba(0,0,0.1)] duration-300 hover:drop-shadow-none hover:text-black btn hover:bg-white border-0">
            Explore More Events
          </button>
          <a href className="flex self-start">
            <div className="flex flex-col justify-end md:col-start-1 md:row-start-2 items-end">
              <img
                src="https://images.unsplash.com/photo-1671180881490-8af6e9c3eaf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MjI0OTk3MQ&ixlib=rb-4.0.3&q=80&w=1080"
                alt="sample"
                className="w-[70%]"
              />
              <div className="flex flex-col z-10 p-4 bg-white text-black w-[70%]">
                <h1 className="font-extrabold text-xl">NASA Space Apps</h1>
                <p>Date</p>
              </div>
            </div>
          </a>
          <a href className="flex self-start justify-self-start">
            <div className="flex flex-col justify-end md:col-start-2 md:row-start-2 items-end self-start">
              <img
                src="https://images.unsplash.com/photo-1671180881490-8af6e9c3eaf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MjI0OTk3MQ&ixlib=rb-4.0.3&q=80&w=1080"
                alt="sample"
                className="w-[70%]"
              />
              <div className="flex flex-col z-10 p-4 bg-white text-black w-[70%]">
                <h1 className="font-extrabold text-xl">Fresher's</h1>
                <p>Date</p>
              </div>
            </div>
          </a>
          <a href className="flex">
            <div className="flex flex-col justify-end md:col-start-1 md:row-start-3 items-end">
              <img
                src="https://images.unsplash.com/photo-1671180881490-8af6e9c3eaf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MjI0OTk3MQ&ixlib=rb-4.0.3&q=80&w=1080"
                alt="sample"
                className="w-[70%]"
              />
              <div className="flex flex-col z-10 p-4 bg-white text-black w-[70%]">
                <h1 className="font-extrabold text-xl">Prarambh</h1>
                <p>Date</p>
              </div>
            </div>
          </a>
          <a href className="flex">
            <div className="flex flex-col justify-end md:col-start-2 md:row-start-3 items-end">
              <img
                src="https://images.unsplash.com/photo-1671180881490-8af6e9c3eaf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MjI0OTk3MQ&ixlib=rb-4.0.3&q=80&w=1080"
                alt="sample"
                className="w-[70%]"
              />
              <div className="flex flex-col z-10 p-4 bg-white text-black w-[70%]">
                <h1 className="font-extrabold text-xl">Dexterix 3.0</h1>
                <p>Date</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default EventComponent;