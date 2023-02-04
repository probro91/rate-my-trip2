import React, {useState} from 'react'
import { SliderData } from './SliderData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa'

const ImageSlider = ({slides}) => {
const [current, setCurrent] = useState(0)
const length = slides.length



  return (
    <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow"  />
        <FaArrowAltCircleRight className="right-arrow"  />
    {SliderData.map((slide, index) => {
        return (
            <img src={slide.image} alt="travel image" width="100" height="100"/>
        )
     })}
    </section>
  )
}

export default ImageSlider