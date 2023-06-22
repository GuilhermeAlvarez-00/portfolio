import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { SectionGallery, ContainerGallery, ImageWrapper } from "./styles";

interface GalleryProps {
  photos: {
    image: {
      url: string;
      image_description: string;
    };
  }[];
}

export function Gallery({ photos }: GalleryProps) {
  return (
    <SectionGallery>
      <ContainerGallery>
        <h2>Galeria</h2>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {photos.map((photo) => (
            <SwiperSlide key={photo.image.url}>
              <ImageWrapper>
                <Image
                  src={photo.image.url}
                  alt={photo.image.image_description}
                  layout="fill"
                  objectFit="cover"
                />
              </ImageWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </ContainerGallery>
    </SectionGallery>
  );
}

