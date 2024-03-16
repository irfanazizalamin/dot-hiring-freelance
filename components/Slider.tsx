"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// Images
import first from "@/public/assets/images/slider/first.jpg";
import second from "@/public/assets/images/slider/second.jpg";

export const images = [
  { src: first, alt: "First" },
  { src: second, alt: "Second" },
];

export default function Slider() {
  return (
    <Swiper
      navigation
      modules={[Navigation]}
      onSwiper={(swiper) => console.log(swiper)}
      className="h-[552px] w-full"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="flex h-full w-full items-center justify-center">
            <Image
              src={image.src}
              alt={image.alt}
              className="block h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
