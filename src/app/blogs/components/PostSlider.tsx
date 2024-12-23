"use client"
import React from "react";
import Slider from "react-slick";
import SliderPostDesign from "./SliderPostDesign"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PostSlider = () => {
  return (
    <section className="py-10 md:py-20">
      <h2 className="text-gray-200 text-center font-bold text-xl md:text-3xl lg:text-4xl hover:text-gray-400 cursor-pointer capitalize mt-3">
        Most Popular AI Videos, 3D models and animation​ blogs{" "}
      </h2>
      <div className="flex justify-center mt-8">
        <div className="bg-[#588A8D] h-[3px] w-[100px]" />
      </div>
      <div className="container mx-auto px-3 mt-16">
      <Slider {...settings}>
           { [1,2,3,4,5].map((item, idx)=>(
                <SliderPostDesign key={idx} />
            ))}
      </Slider>
      </div>
    </section>
  );
};

export default PostSlider;

var settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };