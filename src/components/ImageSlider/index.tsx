import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { useState } from 'react'

import { ImageData } from './imageData'

import { Container } from "./styles";

const slides = ImageData

export function ImageSlider() {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  function nextImage() {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  function prevImage() {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  console.log(current)

  return (
    <Container>
      <IoIosArrowBack onClick={prevImage} />
      {ImageData.map((image, index) => {
        return (
          <div key={index} className={index === current ? 'slide active' : 'slide'}>
            {index == current && (
              <>
                <p>{image.title}</p>
                <img src={image.url} alt={image.alt} />
              </>
            )}
          </div>
        )
      })}
      <IoIosArrowForward onClick={nextImage} />
    </Container>
  )
}