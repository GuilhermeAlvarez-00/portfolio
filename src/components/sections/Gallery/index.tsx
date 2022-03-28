import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import { SectionGallery, ContainerGallery } from './styles'

interface GalleryProps {
  photos: {
    image: {
      url: string
      image_description: string
    }
  }[]
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
              <img src={photo.image.url} alt={photo.image.image_description} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ContainerGallery>
    </SectionGallery>
  )
}
