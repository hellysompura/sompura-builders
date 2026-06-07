import React from "react";

import "swiper/css";
import "swiper/css/navigation";

import { HERO_SLIDES } from "../../utils/CommonData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function HeroCarousel() {
  return (
    <React.Fragment>
      <Swiper navigation={true} modules={[Navigation]} className="w-full h-full">
        {HERO_SLIDES.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img src={slide.image} alt={slide.title} className="w-full h-full object-fill filter brightness-[0.5]" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-(--primary-white)">
                <h1 className="text-4xl font-bold">{slide.title}</h1>
                <p className="text-xl">{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </React.Fragment>
  );
}
