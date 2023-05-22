import React from "react";
import slider1 from "/slider1.jpg";
import slider2 from "/slider2.jpg";
import cover from "/cover.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${cover}), linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5))`,
        backgroundBlendMode: "overlay",
      }}
      className="bg-cover bg-center h-[600px] text-white px-4 mb-2"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-10 w-full container mx-auto py-16 items-center ">
        <div className="w-full px-5 lg:px-0 lg:w-2/5">
          <h2 className="text-white text-4xl lg:text-6xl leading-tight tracking-tighter font-bold">
            Power Toys for Kids
          </h2>
          <p className="text-white py-7">
            Discover a world of imagination and play with our wide selection of kids' toys. From interactive games to educational toys, we offer endless fun and learning opportunities for children of all ages. Explore our collection and ignite your child's creativity and curiosity today!"
          </p>
        </div>
        <div className="w-full px-2 lg:px-0 lg:w-3/5 pb-6">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="rounded-2xl object-cover h-[300px] lg:h-[400px] w-[400px] lg:w-full"
                src={slider1}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-2xl object-cover h-[300px] lg:h-[400px] w-[400px] lg:w-full"
                src={slider2}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-2xl object-cover h-[300px] lg:h-[400px] w-[400px] lg:w-full"
                src={slider1}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-2xl object-cover h-[300px] lg:h-[400px] w-[400px] lg:w-full"
                src={slider2}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-2xl object-cover h-[300px] lg:h-[400px] w-[400px] lg:w-full"
                src={slider1}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-2xl object-cover h-[300px] lg:h-[400px] w-[400px] lg:w-full"
                src={slider2}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
