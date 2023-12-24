"use client";

import { Container, Description, Label, Text } from "./styles";

import { nunito } from "@/app/lib/fonts";
import Image from "next/image";
import gallery from "@/app/utils/gallery";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

function Gallery() {
  return (
    <Container>
      <Swiper slidesPerView={1} navigation={true} modules={[Navigation]}>
        {gallery.map(({ id, img, alt }) => (
          <SwiperSlide key={id}>
            <Image src={img} alt={alt} fill priority />
            <Description>
              <Label className={nunito.className}>Muito saborosa</Label>
              <Text>Massa com textura delicada e sabor autentico</Text>
            </Description>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default Gallery;
