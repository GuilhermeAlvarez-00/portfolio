import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { useState } from 'react'

import { Container } from "./styles";

interface ImageSlider {
  text: string;
  url: string;
  alt: string;
}

interface ImageSliderProps {
  photos: ImageSlider[]
}

export function ImageSlider({ photos }: ImageSliderProps) {
  const [current, setCurrent] = useState(0)
  const length = photos.length

  function nextImage() {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  function prevImage() {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  
  return (
    <Container>
      <IoIosArrowBack onClick={prevImage} />
      {photos.map((image, index) => (
          <div key={index} className={index === current ? 'slide active' : 'slide'}>
              {index == current && (
                <>
                  <p>{image.text}</p>
                  <img src={image.url} alt={image.alt} />
                </>
              )}
            </div>
      ))}
      <IoIosArrowForward onClick={nextImage} />
    </Container>
  )
}