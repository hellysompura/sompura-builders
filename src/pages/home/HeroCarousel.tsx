import React from "react";

import "swiper/css";
import "swiper/css/navigation";

import { HERO_SLIDES } from "../../utils/CommonData";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Icon from "../../components/Icon";

export default function HeroCarousel() {
  return (
    <React.Fragment>
      <Swiper
        // navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000 }}
        className="w-full h-full"
      >
        {HERO_SLIDES.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-fill filter brightness-[0.5]"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-(--primary-white) px-10 lg:px-0">
                <h1 className="lg:text-4xl text-xl text-center font-bold">
                  {slide.title}
                </h1>
                <p className="lg:text-xl text-sm text-center">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <CustomNavigation />
      </Swiper>
    </React.Fragment>
  );
}

function CustomNavigation() {
  const swiper = useSwiper();

  return (
    <>
      <button
        onClick={() => swiper.slidePrev()}
        className="absolute cursor-pointer lg:left-4 left-2 top-1/2 z-10 -translate-y-1/2 bg-white/20 text-white lg:p-3 p-2 rounded-full backdrop-blur"
      >
        <Icon name="ChevronLeft" />
      </button>

      <button
        onClick={() => swiper.slideNext()}
        className="absolute cursor-pointer lg:right-4 right-2 top-1/2 z-10 -translate-y-1/2 bg-white/20 text-white lg:p-3 p-2 rounded-full backdrop-blur"
      >
        <Icon name="ChevronRight" />
      </button>
    </>
  );
}
