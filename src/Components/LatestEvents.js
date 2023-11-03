import React, { Component } from "react";

class LatestEventComponent extends Component {
  state = {
    Events: [
      {
        id: 1,
        class: "flex md:col-start-1 md:row-start-2 self-start",
        image:
          "https://images.unsplash.com/photo-1671180881490-8af6e9c3eaf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MjI0OTk3MQ&ixlib=rb-4.0.3&q=80&w=1080",
        Name: "NASA Space Apps",
        date: "date",
      },
      {
        id: 2,
        class: "flex md:col-start-2 md:row-start-2 self-start",
        image:
          "https://images.unsplash.com/photo-1671180881490-8af6e9c3eaf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MjI0OTk3MQ&ixlib=rb-4.0.3&q=80&w=1080",
        Name: "Fresher's",
        date: "date",
      },
      {
        id: 3,
        class: "flex md:col-start-1 md:row-start-3",
        image:
          "https://images.unsplash.com/photo-1671180881490-8af6e9c3eaf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MjI0OTk3MQ&ixlib=rb-4.0.3&q=80&w=1080",
        Name: "Prarambh",
        date: "date",
      },
      {
        id: 4,
        class: "flex md:col-start-2 md:row-start-3",
        image:
          "https://images.unsplash.com/photo-1671180881490-8af6e9c3eaf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MjI0OTk3MQ&ixlib=rb-4.0.3&q=80&w=1080",
        Name: "Dexterix 3.0",
        date: "date",
      },
    ],
    Carousel: [
      {
        id: "Slide1",
        image: {
          src: "https://images.unsplash.com/photo-1671180881490-8af6e9c3eaf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MjI0OTk3MQ&ixlib=rb-4.0.3&q=80&w=1080",
          id: "image1",
        },
        btn1: 4,
        btn2: 2,
      },
      {
        id: "Slide2",
        image: {
          src: "https://images.unsplash.com/photo-1671180881490-8af6e9c3eaf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MjI0OTk3MQ&ixlib=rb-4.0.3&q=80&w=1080",
          id: "image2",
        },
        btn1: 1,
        btn2: 3,
      },
      {
        id: "Slide3",
        image: {
          src: "https://images.unsplash.com/photo-1671180881490-8af6e9c3eaf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MjI0OTk3MQ&ixlib=rb-4.0.3&q=80&w=1080",
          id: "image3",
        },
        btn1: 2,
        btn2: 4,
      },
      {
        id: "Slide4",
        image: {
          src: "https://images.unsplash.com/photo-1671180881490-8af6e9c3eaf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MjI0OTk3MQ&ixlib=rb-4.0.3&q=80&w=1080",
          id: "image4",
        },
        btn1: 3,
        btn2: 1,
      },
    ],
  };
  render() {
    return (
      <section className="bg-red-700 relative w-[100vw] h-[100vh] flex justify-center items-center text-white">
        <div className="grid md:grid-cols-[40%_60%] w-[80%]">
          <div className="flex flex-col md:gap-8 h-[600px] ">
            <h1 className="text-3xl font-bold">Our Latest Events</h1>
            <div className="flex flex-col justify-end h-[100%] relative text-black bg-[#ffffff90] shadow-[0_5px_10px_rgba(0,0,0.1)]">
              <div className="carousel w-full h-[80%]" id="carousel">
                {this.imageCarousel()}
              </div>
              <div className="z-10 m-6">
                <h1 className="text-2xl font-extrabold">Unifest</h1>
                <p className="font-semibold">North-India's Biggest Fest</p>
                <p className="font-semibold">11-12 April 2022</p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:grid-rows-[68px_1fr_1fr] h-[600px]">
            <a href="/events" className="col-span-2 px-8 bg-[#fff] text-[#AA0A1D] place-self-end self-start drop-shadow-[0_5px_10px_rgba(0,0,0.1)] duration-300 hover:drop-shadow-none hover:text-black btn hover:bg-white border-0">
              Explore More Events
            </a>
            {this.imageGrid()}
          </div>
        </div>
      </section>
    );
  }
  imageCarousel() {
    return (
      <React.Fragment>
        {this.state.Carousel.map((Carousel) => (
          <div
            id={Carousel.id}
            className="carousel-item relative w-full m-0"
            key={Carousel.id}
          >
            <img
              src={Carousel.image.src}
              className="w-full"
              id={Carousel.image.id}
            />
            <div className="absolute flex justify-between transform translate-y-1/2 left-5 right-5 top-1/2">
              <button
                className="btn btn-circle text-white bg-black hover:invert"
                onClick={() => this.scrolling(Carousel.btn1)}
              >
                ❮
              </button>
              <button
                className="btn btn-circle text-white bg-black hover:invert"
                onClick={() => this.scrolling(Carousel.btn2)}
              >
                ❯
              </button>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
  imageGrid() {
    return (
      <React.Fragment>
        {this.state.Events.map((Events) => (
          <a className={Events.class} key={Events.id}>
            <div
              className="flex flex-col justify-end items-end"
              key={Events.id}
            >
              <img
                src={Events.image}
                alt="sample"
                className="w-[70%] shadow-[0_5px_10px_rgba(0,0,0.1)]"
              />
              <div className="flex flex-col z-10 p-4 bg-white text-black w-[70%] shadow-[0_5px_10px_rgba(0,0,0.1)]">
                <h1 className="font-extrabold text-xl">{Events.Name}</h1>
                <p>{Events.date}</p>
              </div>
            </div>
          </a>
        ))}
      </React.Fragment>
    );
  }
  scrolling = (pos) => {
    var y =
      window.scrollX +
      document.querySelector("#image" + pos).getBoundingClientRect().left;
    var item_cont = document.getElementById("carousel");
    item_cont.scrollBy({ top: 0, left: y, behavior: "smooth" });
  };
}

export default LatestEventComponent;
