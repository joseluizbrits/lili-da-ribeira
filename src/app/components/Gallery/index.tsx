"use client";

import { MyStyles } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

function Gallery() {
  return (
    <MyStyles>
      <Swiper slidesPerView={1} navigation={true} modules={[Navigation]}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </MyStyles>
  );
}

export default Gallery;
