"use client";

import { Container, Description, Label, Text } from "./styles";
import Animation from "./animation";

import { nunito } from "@/app/lib/fonts";
import Image from "next/image";
import gallery from "@/app/utils/gallery";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

function Gallery() {
  Animation();

  return (
    <Container>
      <Swiper slidesPerView={1} navigation={true} modules={[Navigation]}>
        {gallery.map(({ id, img, alt, label, desc }) => (
          <SwiperSlide key={id}>
            <Image src={img} alt={alt} fill priority />
            <Description>
              <Label className={nunito.className + " label"}>{label}</Label>
              <Text className="desc">{desc}</Text>
            </Description>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default Gallery;
